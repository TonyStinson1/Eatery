import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.27 12.401c.08-.66.123-1.333.123-2.015C40.393 4.65 35.743 0 30.007 0H12.65a2.236 2.236 0 00-2.205 1.865L4.05 39.878a2.236 2.236 0 002.205 2.607h6.348a2.254 2.254 0 002.222-1.864l.03-.177-.885 5.258A1.971 1.971 0 0015.914 48h5.553a1.97 1.97 0 001.944-1.644l1.578-9.377a3.357 3.357 0 013.31-2.8h1.459c7.925 0 14.349-6.424 14.349-14.349a9.1 9.1 0 00-3.837-7.429z"
        fill="#002987"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.27 12.401c-.993 8.08-7.88 14.336-16.227 14.336h-4.844a2.43 2.43 0 00-2.333 1.757L13.97 45.702A1.971 1.971 0 0015.914 48h5.554a1.97 1.97 0 001.943-1.644l1.578-9.377a3.357 3.357 0 013.31-2.8h1.46c7.924 0 14.348-6.424 14.348-14.349a9.1 9.1 0 00-3.837-7.429z"
        fill="#0085CC"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.2 26.736h4.843c8.348 0 15.234-6.256 16.227-14.335a9.07 9.07 0 00-5.277-1.685H22.35a2.948 2.948 0 00-2.907 2.459l-2.577 15.32a2.43 2.43 0 012.333-1.759z"
        fill="#00186A"
      />
    </Svg>
  );
}

const SvgPayPal = React.memo(SvgComponent);
export default SvgPayPal;