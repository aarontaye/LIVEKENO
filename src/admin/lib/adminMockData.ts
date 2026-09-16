import type { AdminUser, KYCEntry, PaytableVersion, RecentBet, Report, ScheduledDraw } from './adminTypes';

export const adminMetrics = [
  { label: 'Active Bets', value: '2,483', change: '+12.1%', tone: 'blue' },
  { label: 'Total Wagered Today', value: 'ETB 184,750', change: '+8.6%', tone: 'gold' },
  { label: 'Total Payouts Today', value: 'ETB 92,430', change: '+21.4%', tone: 'green' },
  { label: 'System Health', value: 'Healthy', change: 'RNG / Draw Engine / API', tone: 'green' },
];
export const chartData = [182, 214, 198, 258, 221, 249, 276];
export const payoutData = [112, 144, 130, 178, 151, 164, 190];
export const recentBets: RecentBet[] = [
  { id: '#BK97642', user: 'Girma M.', game: 'Keno', picks: 8, stake: 50, payout: 0, status: 'Lost', time: '14:31' },
  { id: '#BK97641', user: 'Fitsum T.', game: 'Keno', picks: 10, stake: 100, payout: 1200, status: 'Won', time: '14:29' },
  { id: '#BK97640', user: 'Selam T.', game: 'Keno', picks: 7, stake: 25, payout: 0, status: 'Lost', time: '14:28' },
  { id: '#BK97639', user: 'Bereket G.', game: 'Keno', picks: 10, stake: 200, payout: 0, status: 'Lost', time: '14:26' },
];
export const versions: PaytableVersion[] = [
  { version: 'v1.3.0 (current)', status: 'Published', effectiveFrom: 'Apr 20, 2025, 10:42', createdBy: 'Abebe Kebede', updated: '2h ago' },
  { version: 'v1.2.1', status: 'Draft', effectiveFrom: 'Apr 18, 2025, 16:20', createdBy: 'Abebe Kebede', updated: '1d ago' },
  { version: 'v1.2.0', status: 'Archived', effectiveFrom: 'Apr 10, 2025, 09:13', createdBy: 'Selam Tesfaye', updated: '10d ago' },
];
export const scheduledDraws: ScheduledDraw[] = ['14:35','14:40','14:45','14:50','14:55','15:00'].map((time, i) => ({ id: `#D20250426-${142 + i}`, time, status: 'Scheduled', numbers: [] }));
export const pastDraws = ['14:30','14:25','14:20','14:15'].map((time, i) => ({ id: `#D20250426-${140 - i}`, time, status: 'Completed', numbers: [3, 7, 9, 12, 18, 21, 27, 31, 35, 42, 46, 51, 56, 63, 67, 70, 73, 76, 78, 80] }));
export const users: AdminUser[] = [
  { id: '#U01234', name: 'Dawit Mengistu', email: 'dawit@example.com', role: 'Player', status: 'Active', balance: 1250, verification: 'Verified', flags: [] },
  { id: '#U01235', name: 'Selam Tesfaye', email: 'selam@example.com', role: 'Player', status: 'Active', balance: 430, verification: 'Pending', flags: [] },
  { id: '#U01236', name: 'Fitsum Alemu', email: 'fitsum@example.com', role: 'Player', status: 'Suspended', balance: 0, verification: 'Rejected', flags: ['Fraud Risk'] },
  { id: '#U01237', name: 'Bereket Girma', email: '+251 912 345 678', role: 'Player', status: 'Active', balance: 3620, verification: 'Verified', flags: [] },
  { id: '#U01238', name: 'Hana Worku', email: 'hana@example.com', role: 'Player', status: 'Active', balance: 880, verification: 'Verified', flags: [] },
];
export const kycQueue: KYCEntry[] = [
  { id: '#KYC0421', name: 'Mekdes Alemu', submitted: '10 min ago', document: 'National ID ••••129', risk: 'Low' },
  { id: '#KYC0420', name: 'Eden Tadesse', submitted: '24 min ago', document: 'Passport ••••501', risk: 'Medium' },
  { id: '#KYC0419', name: 'Abebe Tegegne', submitted: '1h ago', document: 'National ID ••••873', risk: 'Low' },
];
export const reports: Report[] = [
  { name: 'Revenue Report', description: 'Wagers, revenue, and net revenue', updated: 'Today, 14:00' },
  { name: 'Payout Report', description: 'Payout volume and winning bets', updated: 'Today, 14:00' },
  { name: 'Player Activity', description: 'Sessions, deposits, and active users', updated: 'Today, 14:00' },
  { name: 'Wager by Game', description: 'Game-level performance breakdown', updated: 'Today, 14:00' },
];
