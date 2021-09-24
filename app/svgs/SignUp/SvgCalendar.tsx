import * as React from 'react';
import Svg, {Rect, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Rect opacity={0.01} width={16} height={16} fill="black" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.71241 0.638209V1.05496V1.60705V2.15913V2.48156C3.71241 2.83414 3.99805 3.11977 4.35062 3.11977C4.70309 3.11977 4.98883 2.83414 4.98883 2.48156V2.15913V1.60705V1.05496V0.638209C4.98889 0.285632 4.70314 0 4.35068 0C3.99805 0.000288809 3.71241 0.285921 3.71241 0.638209ZM16 3.35452V3.59267V5.76682V13.4242C16 14.823 14.4424 15.9618 13.0436 15.9618H2.54498C1.14599 15.9618 0.00756836 14.823 0.00756836 13.4242V5.76653V3.59238V3.35423C0.00756836 2.12309 1.54048 1.1174 2.88413 1.06109V1.61311V2.17132V2.48162C2.88413 3.29023 3.54187 3.94802 4.35036 3.94802C5.15891 3.94802 5.8167 3.29023 5.8167 2.48162V2.15919V1.60711V1.05502H10.1829V1.60711V2.15919V2.48162C10.1829 3.29023 10.8406 3.94802 11.6491 3.94802C12.4576 3.94802 13.1154 3.29023 13.1154 2.48162V2.16549V1.61046V1.0586C14.4816 1.09366 16 2.10865 16 3.35452ZM3.67423 6C3.12195 6 2.67423 6.44772 2.67423 7V7.66667C2.67423 8.21895 3.12195 8.66667 3.67424 8.66667H4.3409C4.89319 8.66667 5.3409 8.21895 5.3409 7.66667V7C5.3409 6.44772 4.89319 6 4.3409 6H3.67423ZM2.67423 11.6667C2.67423 11.1144 3.12195 10.6667 3.67423 10.6667H4.3409C4.89319 10.6667 5.3409 11.1144 5.3409 11.6667V12.3333C5.3409 12.8856 4.89319 13.3333 4.3409 13.3333H3.67424C3.12195 13.3333 2.67423 12.8856 2.67423 12.3333V11.6667ZM7.67424 10.6667C7.12195 10.6667 6.67424 11.1144 6.67424 11.6667V12.3333C6.67424 12.8856 7.12195 13.3333 7.67424 13.3333H8.3409C8.89319 13.3333 9.3409 12.8856 9.3409 12.3333V11.6667C9.3409 11.1144 8.89319 10.6667 8.3409 10.6667H7.67424ZM6.67424 7C6.67424 6.44772 7.12195 6 7.67424 6H8.3409C8.89319 6 9.3409 6.44772 9.3409 7V7.66667C9.3409 8.21895 8.89319 8.66667 8.3409 8.66667H7.67424C7.12195 8.66667 6.67424 8.21895 6.67424 7.66667V7ZM11.6742 6C11.1219 6 10.6742 6.44772 10.6742 7V7.66667C10.6742 8.21895 11.122 8.66667 11.6742 8.66667H12.3409C12.8932 8.66667 13.3409 8.21895 13.3409 7.66667V7C13.3409 6.44772 12.8932 6 12.3409 6H11.6742ZM11.011 0.63848C11.011 0.285902 11.2967 0.000270453 11.6493 0.000270453C12.0017 0.000270453 12.2872 0.285902 12.2877 0.638191V1.05494V1.60703V2.15912V2.48183C12.2877 2.83441 12.0019 3.12004 11.6493 3.12004C11.2967 3.12004 11.011 2.83441 11.011 2.48183V2.1594V1.60732V1.05523V0.63848Z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={16}
          y1={0}
          x2={0.00756836}
          y2={0}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#82D84E" />
          <Stop offset={1} stopColor="#0EAD69" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const SvgCalendar = React.memo(SvgComponent);
export default SvgCalendar;
