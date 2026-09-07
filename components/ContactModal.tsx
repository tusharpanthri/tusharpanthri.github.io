'use client';

import { useState } from 'react';

// 1. Create a form at https://formspree.io and paste its id here.
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const INK = '#11100D';
const PAPER = '#EEE9D8';
const YELLOW = '#FFE119';
const RED = '#FF4B2B';
const MUTED = '#6E675A';

const labelStyle: React.CSSProperties = {
  fontFamily: "'Geist Mono', monospace",
  fontSize: 11,
  letterSpacing: '.08em',
  textTransform: 'uppercase',
  color: MUTED,
};

const inputStyle: React.CSSProperties = {
  fontFamily: 'Geist, sans-serif',
  fontSize: 16,
  padding: '12px 14px',
  background: '#fff',
  border: `2px solid ${INK}`,
  color: INK,
  outline: 'none',
};

export default function ContactModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('Hi Tushar, I really liked your profile — ');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');

  async function submit() {
    if (sending) return;
    if (!email.includes('@') || message.trim().length < 4) {
      setErr('Add your email and a short message.');
      return;
    }
    setSending(true);
    setErr('');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error('bad status');
      setSent(true);
    } catch {
      setErr('Something broke — email me directly at tusharpanthri@gmail.com');
    } finally {
      setSending(false);
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(17,16,13,.55)',
          backdropFilter: 'blur(3px)',
        }}
      />
      <div
        style={{
          position: 'relative',
          width: 560,
          maxWidth: '100%',
          background: PAPER,
          border: `2px solid ${INK}`,
          boxShadow: `12px 12px 0 ${INK}`,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 22px',
            borderBottom: `2px solid ${INK}`,
            background: INK,
            color: PAPER,
            fontFamily: "'Geist Mono', monospace",
            fontSize: 12,
            letterSpacing: '.06em',
            textTransform: 'uppercase',
          }}
        >
          <span>new message — tusharpanthri@gmail.com</span>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: 'transparent',
              border: 0,
              color: PAPER,
              fontSize: 18,
              lineHeight: 1,
              cursor: 'pointer',
              padding: '0 2px',
            }}
          >
            ×
          </button>
        </div>

        {sent ? (
          <div style={{ padding: '56px 34px', textAlign: 'center' }}>
            <div
              style={{
                width: 52,
                height: 52,
                margin: '0 auto 20px',
                border: `2px solid ${INK}`,
                borderRadius: 999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: YELLOW,
              }}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke={INK}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: '-.02em',
                margin: '0 0 8px',
              }}
            >
              Message sent
            </h3>
            <p style={{ fontSize: 16, margin: '0 0 24px', color: '#4a4640' }}>
              It landed in my inbox. I usually reply within a day.
            </p>
            <button
              onClick={onClose}
              style={{
                background: INK,
                color: YELLOW,
                border: 0,
                padding: '13px 28px',
                fontFamily: 'Geist, sans-serif',
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <div style={{ padding: '26px 30px 30px' }}>
            <div style={{ display: 'flex', gap: 14, marginBottom: 18 }}>
              <label style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
                <span style={labelStyle}>Your name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  style={inputStyle}
                />
              </label>
              <label style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
                <span style={labelStyle}>Your email</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="jane@company.com"
                  style={inputStyle}
                />
              </label>
            </div>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              <span style={labelStyle}>Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                style={{ ...inputStyle, lineHeight: 1.5, resize: 'vertical' }}
              />
            </label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 20,
                marginTop: 20,
              }}
            >
              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 12,
                  color: err ? RED : MUTED,
                  maxWidth: 260,
                  lineHeight: 1.4,
                }}
              >
                {err || 'Goes straight to my inbox — no newsletter, no CRM.'}
              </span>
              <button
                onClick={submit}
                style={{
                  background: INK,
                  color: YELLOW,
                  border: 0,
                  padding: '15px 30px',
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: `5px 5px 0 ${RED}`,
                  flexShrink: 0,
                }}
              >
                {sending ? 'Sending…' : 'Send message'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
