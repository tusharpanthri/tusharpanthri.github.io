import type { FlowDiagram, FlowNode } from '@/data/project-articles';

// Layout is authored on a fixed 860-wide canvas; the SVG scales to its container.
const VIEW_WIDTH = 860;
const NODE_WIDTH = 220;
const PADDING = 24;
const PALETTE = ['#1f7cff', '#ffd666', '#2ee6a6', '#b07cff', '#ff4fa3', '#ff8a3d'];
const DASHED_COLOR = '#FF4B2B';
const PACKET_SECONDS = 2.8;

type Point = { x: number; y: number };

const nodeWidth = (node: FlowNode) => node.w ?? NODE_WIDTH;
const nodeHeight = (node: FlowNode) => 46 + 18 * node.detail.length;

// Connects facing sides: left/right when the boxes share a row, top/bottom otherwise.
function route(from: FlowNode, to: FlowNode): [Point, Point, Point, Point] {
  const fw = nodeWidth(from), fh = nodeHeight(from);
  const tw = nodeWidth(to), th = nodeHeight(to);
  const sameRow = from.y < to.y + th && to.y < from.y + fh;

  if (sameRow) {
    const rightward = to.x > from.x;
    const start = { x: rightward ? from.x + fw : from.x, y: from.y + fh / 2 };
    const end = { x: rightward ? to.x : to.x + tw, y: to.y + th / 2 };
    const midX = (start.x + end.x) / 2;
    return [start, { x: midX, y: start.y }, { x: midX, y: end.y }, end];
  }

  const downward = to.y > from.y;
  const start = { x: from.x + fw / 2, y: downward ? from.y + fh : from.y };
  const end = { x: to.x + tw / 2, y: downward ? to.y : to.y + th };
  const midY = (start.y + end.y) / 2;
  return [start, { x: start.x, y: midY }, { x: end.x, y: midY }, end];
}

function pointAt([p0, p1, p2, p3]: [Point, Point, Point, Point], t: number): Point {
  const u = 1 - t;
  const a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
  return { x: a * p0.x + b * p1.x + c * p2.x + d * p3.x, y: a * p0.y + b * p1.y + c * p2.y + d * p3.y };
}

export default function ArchitectureFlow({ diagram, name }: { diagram: FlowDiagram; name: string }) {
  const byId = new Map(diagram.nodes.map((node) => [node.id, node]));
  const viewHeight = Math.max(...diagram.nodes.map((node) => node.y + nodeHeight(node))) + PADDING;

  const edges = diagram.edges.map((edge, index) => {
    const from = byId.get(edge.from)!;
    const to = byId.get(edge.to)!;
    const curve = route(from, to);
    const [p0, p1, p2, p3] = curve;
    const straight = p0.x === p3.x || p0.y === p3.y;
    const d = straight
      ? `M ${p0.x} ${p0.y} L ${p3.x} ${p3.y}`
      : `M ${p0.x} ${p0.y} C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`;
    const color = edge.dashed ? DASHED_COLOR : PALETTE[index % PALETTE.length];
    const vertical = p1.x === p0.x;
    return { ...edge, d, curve, color, vertical, key: `${edge.from}-${edge.to}` };
  });

  return (
    <figure className="my-10 lg:-mx-12 overflow-hidden border-4 border-near-black dark:border-[var(--dm-border)] bg-[#0b0b0d] text-[#ededed] shadow-[7px_7px_0_#11100D] dark:shadow-[7px_7px_0_var(--dm-shadow)]">
      <div className="flex items-center gap-2 border-b border-[#2b2923] bg-[#151513] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]"></span><span className="h-3 w-3 rounded-full bg-[#febc2e]"></span><span className="h-3 w-3 rounded-full bg-[#28c840]"></span>
        <h2 className="ml-3 font-mono text-[11px] tracking-[.08em] text-[#a7a092]">{name} — {diagram.title.toLowerCase()}</h2>
      </div>

      <div className="bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.035)_0_1px,transparent_1px_72px)] px-2 py-4 md:px-4">
        <svg
          viewBox={`0 0 ${VIEW_WIDTH} ${viewHeight}`}
          className="hidden md:block h-auto w-full"
          style={{ fontFamily: 'var(--font-geist-mono), ui-monospace, monospace' }}
          role="img"
          aria-label={`${diagram.title}: ${diagram.nodes.map((node) => node.label).join(', ')}`}
        >
          {edges.map((edge) => {
            const mid = pointAt(edge.curve, 0.5);
            return (
              <g key={edge.key}>
                <path d={edge.d} fill="none" stroke="#7a7a82" strokeWidth={1.5} strokeDasharray={edge.dashed ? '5 5' : undefined} />
                {[0, 1].map((n) => (
                  <circle key={n} r={5.5} fill={edge.color} className="flow-packet">
                    <animateMotion dur={`${PACKET_SECONDS}s`} begin={`${-n * PACKET_SECONDS / 2}s`} repeatCount="indefinite" path={edge.d} />
                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur={`${PACKET_SECONDS}s`} begin={`${-n * PACKET_SECONDS / 2}s`} repeatCount="indefinite" />
                  </circle>
                ))}
                {[0.3, 0.7].map((t) => {
                  const p = pointAt(edge.curve, t);
                  return <circle key={t} cx={p.x} cy={p.y} r={5.5} fill={edge.color} className="flow-dot" />;
                })}
                {edge.label && (
                  <text
                    x={edge.vertical ? mid.x + 10 : mid.x}
                    y={edge.vertical ? mid.y + 4 : mid.y - 10}
                    textAnchor={edge.vertical ? 'start' : 'middle'}
                    fontSize={11}
                    fill="#8d8d95"
                  >
                    {edge.label}
                  </text>
                )}
              </g>
            );
          })}

          {diagram.nodes.map((node) => {
            const w = nodeWidth(node);
            return (
              <g key={node.id} className="group">
                <rect x={node.x} y={node.y} width={w} height={nodeHeight(node)} rx={6} fill="#17171b" strokeWidth={1.5} className="stroke-[#5c5c63] transition-colors group-hover:stroke-accent-yellow" />
                <text x={node.x + w / 2} y={node.y + 28} textAnchor="middle" fontSize={17} fill="#ededed">{node.label}</text>
                {node.detail.map((line, i) => (
                  <text key={line} x={node.x + w / 2} y={node.y + 50 + i * 18} textAnchor="middle" fontSize={13} fill="#8d8d95">{line}</text>
                ))}
              </g>
            );
          })}
        </svg>

        {/* Small screens: the same nodes in reading order, with branches called out */}
        <ol className="md:hidden font-mono">
          {diagram.nodes.map((node, index) => {
            const next = diagram.nodes[index + 1];
            const branches = edges.filter((edge) => edge.from === node.id && edge.to !== next?.id);
            const color = edges.find((edge) => edge.from === node.id)?.color ?? PALETTE[0];
            return (
              <li key={node.id}>
                <div className="rounded-md border border-[#5c5c63] bg-[#17171b] px-4 py-3 text-center">
                  <p className="text-[15px]">{node.label}</p>
                  {node.detail.map((line) => <p key={line} className="text-xs text-[#8d8d95]">{line}</p>)}
                  {branches.map((edge) => (
                    <p key={edge.key} className="mt-1 text-[11px]" style={{ color: edge.color }}>→ {byId.get(edge.to)!.label}{edge.label ? ` (${edge.label})` : ''}</p>
                  ))}
                </div>
                {next && (
                  <div className="relative mx-auto h-8 w-px bg-[#7a7a82]">
                    <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: color }}></span>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <figcaption className="border-t border-[#2b2923] px-5 py-3 text-sm leading-relaxed text-[#a7a092]">{diagram.caption}</figcaption>
    </figure>
  );
}
