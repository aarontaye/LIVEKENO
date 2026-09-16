import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { useAdminSession } from '@/admin/state/useAdminSession';

export default function LoginPage() {
  const signIn = useAdminSession((s) => s.signIn);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = signIn(email, password);
    if (ok) navigate('/admin');
    else setError('Invalid credentials. Enter any email and password to continue.');
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#05070d] px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f0d680] to-[#a8842f]"><span className="text-lg font-black text-[#0a1628]">K</span></div>
          <div className="text-center"><h1 className="text-xl font-black text-white">KENO Admin</h1><p className="text-xs text-[#7a8a9e]">Operations Console</p></div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-[rgba(232,169,59,0.12)] bg-[#0a0e17] p-6">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#7a8a9e]">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@keno.com" className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#05070d] px-3 py-2.5 text-sm text-white outline-none focus:border-[rgba(232,169,59,0.3)]" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#7a8a9e]">Password</label>
            <div className="relative mt-1.5">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full rounded-lg border border-white/10 bg-[#05070d] px-3 py-2.5 pr-10 text-sm text-white outline-none focus:border-[rgba(232,169,59,0.3)]" />
              <Lock className="absolute right-3 top-3 h-4 w-4 text-[#7a8a9e]" />
            </div>
          </div>
          {error && <p className="text-xs text-[#e85d5d]">{error}</p>}
          <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-[#f0d680] to-[#a8842f] py-2.5 text-sm font-bold text-[#0a1628] hover:opacity-90">Sign In</button>
          <p className="text-center text-xs text-[#7a8a9e]">Mock auth — enter any email and password.</p>
        </form>
      </div>
    </div>
  );
}
