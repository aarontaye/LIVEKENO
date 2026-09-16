export type Status = 'Published' | 'Draft' | 'Archived' | 'Active' | 'Suspended' | 'Pending' | 'Verified' | 'Rejected' | 'Completed' | 'Scheduled' | 'Healthy' | 'Won' | 'Lost';
export interface AdminUser { id: string; name: string; email: string; role: string; status: Status; balance: number; verification: Status; flags: string[]; }
export interface PaytableVersion { version: string; status: Status; effectiveFrom: string; createdBy: string; updated: string; }
export interface ScheduledDraw { id: string; time: string; status: Status; numbers: number[]; }
export interface KYCEntry { id: string; name: string; submitted: string; document: string; risk: string; }
export interface Report { name: string; description: string; updated: string; }
export interface RecentBet { id: string; user: string; game: string; picks: number; stake: number; payout: number; status: Status; time: string; }
