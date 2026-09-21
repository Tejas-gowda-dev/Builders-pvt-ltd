import React, { useState } from 'react';
import { X, Check, Copy, ArrowRight, Server, FileCode2 } from 'lucide-react';
import { WP_REDIRECT_MAP, NGINX_REDIRECT_CONFIG, NEXT_REDIRECT_CONFIG } from '../data/migration';

interface MigrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MigrationModal: React.FC<MigrationModalProps> = ({ isOpen, onClose }) => {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(label);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="migration-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF9F6] rounded-2xl shadow-2xl border border-[#E6E1D8] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1C1A18] text-white p-6 relative">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-xs font-mono text-[#C27848] uppercase tracking-wider">
            <Server className="w-4 h-4" />
            <span>Architecture Migration Reference</span>
          </div>
          <h2 id="migration-modal-title" className="text-2xl font-normal font-serif-heading mt-1">
            WordPress to Modern Next.js / Clean SPA 301 Redirect Rules
          </h2>
          <p className="text-xs text-[#A89E92] mt-1.5">
            Preserve Google search rankings, backlinks, and existing visitor bookmarks from the legacy WordPress installation at gowdrurealcom.com.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Mapping Table */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A1918] mb-3">
              1. Configured 301 Route Mappings
            </h3>
            <div className="overflow-x-auto border border-[#E6E1D8] rounded-lg">
              <table className="min-w-full divide-y divide-[#E6E1D8] text-xs">
                <thead className="bg-[#F2ECE4] text-[#4A453E]">
                  <tr>
                    <th className="px-4 py-2.5 text-left font-semibold">Legacy WordPress URL</th>
                    <th className="px-4 py-2.5 text-left font-semibold">Redirects To (New Route)</th>
                    <th className="px-4 py-2.5 text-left font-semibold">Status Code</th>
                    <th className="px-4 py-2.5 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#E6E1D8]">
                  {WP_REDIRECT_MAP.map((rule, i) => (
                    <tr key={i} className="hover:bg-[#FAF9F6]">
                      <td className="px-4 py-2 font-mono text-[#8D4B20]">{rule.from}</td>
                      <td className="px-4 py-2 font-mono font-semibold text-[#1A1918]">/{rule.to}</td>
                      <td className="px-4 py-2 text-emerald-700 font-bold">301 Permanent</td>
                      <td className="px-4 py-2 text-[#7C7469]">{rule.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Next.js Configuration Snippet */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A1918] flex items-center gap-1.5">
                <FileCode2 className="w-4 h-4 text-[#C27848]" />
                <span>Next.js Deployment Snippet (next.config.js)</span>
              </h3>
              <button
                onClick={() => copyToClipboard(NEXT_REDIRECT_CONFIG, 'next')}
                className="inline-flex items-center gap-1 text-xs text-[#C27848] hover:underline"
              >
                {copiedTab === 'next' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedTab === 'next' ? 'Copied' : 'Copy Snippet'}</span>
              </button>
            </div>
            <pre className="p-3.5 bg-[#1C1A18] text-[#EFEAE2] rounded-lg text-xs font-mono overflow-x-auto border border-[#3E3831]">
              {NEXT_REDIRECT_CONFIG.trim()}
            </pre>
          </div>

          {/* Nginx Configuration Snippet */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A1918] flex items-center gap-1.5">
                <Server className="w-4 h-4 text-[#C27848]" />
                <span>Nginx Reverse Proxy Snippet</span>
              </h3>
              <button
                onClick={() => copyToClipboard(NGINX_REDIRECT_CONFIG, 'nginx')}
                className="inline-flex items-center gap-1 text-xs text-[#C27848] hover:underline"
              >
                {copiedTab === 'nginx' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedTab === 'nginx' ? 'Copied' : 'Copy Snippet'}</span>
              </button>
            </div>
            <pre className="p-3.5 bg-[#1C1A18] text-[#EFEAE2] rounded-lg text-xs font-mono overflow-x-auto border border-[#3E3831]">
              {NGINX_REDIRECT_CONFIG.trim()}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F2ECE4] border-t border-[#E6E1D8] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#2A2724] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#C27848] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
