import { Analytics } from '@vercel/analytics/next';
import { memo } from 'react';

interface VercelAnalyticsProps {
  debug?: boolean;
}

const VercelAnalytics = memo<VercelAnalyticsProps>(({ debug }) => <Analytics debug={debug} />);

export default VercelAnalytics;
