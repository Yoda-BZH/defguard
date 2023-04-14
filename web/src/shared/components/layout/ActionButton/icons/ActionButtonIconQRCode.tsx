/* eslint-disable max-len */
import { motion, SVGMotionProps } from 'framer-motion';

import { ColorsRGB } from '../../../../constants';

export const ActionButtonIconQRCode = (props: SVGMotionProps<SVGSVGElement>) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={21.541}
      height={21.212}
      {...props}
    >
      <defs>
        <clipPath id="qr-icon-white_svg__a">
          <path
            data-name="Rectangle 3014"
            fill={ColorsRGB.GrayLight}
            d="M0 0h21.541v21.212H0z"
          />
        </clipPath>
      </defs>
      <motion.g
        data-name="Group 4749"
        clipPath="url(#qr-icon-white_svg__a)"
        variants={{
          idle: {
            fill: ColorsRGB.GrayLight,
          },
          active: {
            fill: ColorsRGB.White,
          },
        }}
      >
        <path
          data-name="Path 5698"
          d="M7.495 8.5H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6.495a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1M2 6.5h4.495V2H2Z"
        />
        <path
          data-name="Path 5699"
          d="M20.541 8.5h-6.5a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1m-5.5-2h4.5V2h-4.5Z"
        />
        <path
          data-name="Path 5700"
          d="M7.495 21.212H1a1 1 0 0 1-1-1v-6.5a1 1 0 0 1 1-1h6.495a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1m-5.495-2h4.495v-4.5H2Z"
        />
        <path
          data-name="Path 5701"
          d="M18.491 16.757H17.8a.509.509 0 0 1-.509-.509v-.688a.509.509 0 0 1 .509-.509h.688a.509.509 0 0 1 .512.509v.688a.509.509 0 0 1-.509.509"
        />
        <path
          data-name="Path 5702"
          d="M20.638 18.877h-.689a.508.508 0 0 1-.508-.509v-.688a.508.508 0 0 1 .508-.509h.689a.509.509 0 0 1 .508.509v.688a.509.509 0 0 1-.508.509"
        />
        <path
          data-name="Path 5703"
          d="M18.491 21H17.8a.509.509 0 0 1-.509-.509V19.8a.509.509 0 0 1 .509-.509h.688A.509.509 0 0 1 19 19.8v.688a.509.509 0 0 1-.509.509"
        />
        <path
          data-name="Path 5704"
          d="M4.592 5.1H3.9a.509.509 0 0 1-.509-.509V3.9a.509.509 0 0 1 .509-.505h.688A.509.509 0 0 1 5.1 3.9v.688a.509.509 0 0 1-.509.509"
        />
        <path
          data-name="Path 5705"
          d="M4.592 18.023H3.9a.509.509 0 0 1-.509-.509v-.688a.509.509 0 0 1 .509-.509h.688a.509.509 0 0 1 .509.509v.688a.509.509 0 0 1-.509.509"
        />
        <path
          data-name="Path 5706"
          d="M16.289 17.17h-2.835a.509.509 0 0 0-.509.509v.688a.509.509 0 0 0 .509.509h2.835a.509.509 0 0 0 .509-.509v-.688a.509.509 0 0 0-.509-.509"
        />
        <path
          data-name="Path 5707"
          d="M20.638 10.7H17.8a.509.509 0 0 0-.509.509v.691a.509.509 0 0 0 .509.509h1.638v1.721a.509.509 0 0 0 .509.509h.688a.509.509 0 0 0 .509-.509v-2.919a.509.509 0 0 0-.509-.509"
        />
        <path
          data-name="Path 5708"
          d="M16.289 12.932h-1.638v-1.72a.509.509 0 0 0-.509-.509h-2.807a.509.509 0 0 0-.509.509v.688a.509.509 0 0 0 .509.509h1.61v3.84a.509.509 0 0 0 .509.509h.688a.509.509 0 0 0 .509-.509v-1.611h1.638a.509.509 0 0 0 .509-.509v-.688a.509.509 0 0 0-.509-.509"
        />
        <path
          data-name="Path 5709"
          d="M12.023 21h-.688a.509.509 0 0 1-.509-.509V19.8a.509.509 0 0 1 .509-.509h.688a.509.509 0 0 1 .509.509v.688a.509.509 0 0 1-.509.509"
        />
        <path
          data-name="Path 5710"
          d="M17.638 5.1h-.689a.508.508 0 0 1-.508-.509V3.9a.508.508 0 0 1 .508-.509h.689a.509.509 0 0 1 .508.509v.688a.509.509 0 0 1-.508.509"
        />
      </motion.g>
    </motion.svg>
  );
};
