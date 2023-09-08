import React from "react";

const DoubleArrowsRightIconSvg = ({ focused, ...props }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={focused ? "1" : "0.2"}>
        <path
          d="M7.60804 7.99997C7.62271 7.81137 7.56538 7.61874 7.42075 7.47478L1.47411 1.53813C1.21152 1.27621 0.786282 1.27621 0.523686 1.53813C0.261066 1.80007 0.261066 2.22466 0.523686 2.48725L6.04576 7.99997L0.523686 13.5127C0.261066 13.7746 0.261066 14.1992 0.523686 14.4612C0.786307 14.7231 1.21154 14.7231 1.47411 14.4612L7.42077 8.52451C7.56538 8.38055 7.62205 8.18862 7.60804 7.99997ZM15.4849 7.47478L8.19394 0.196439C7.93132 -0.0654795 7.50608 -0.0654795 7.24348 0.196439C6.98086 0.458382 6.98086 0.88362 7.24348 1.14489L14.1099 7.99997L7.24346 14.8544C6.98084 15.1163 6.98084 15.5409 7.24346 15.8035C7.50608 16.0655 7.93132 16.0655 8.19391 15.8035L15.4842 8.52521C15.6289 8.38125 15.6855 8.18862 15.6708 7.99999C15.6862 7.81137 15.6289 7.61874 15.4849 7.47478Z"
          fill="#F8F8FC"
        />
      </g>
    </svg>
  );
};

export default DoubleArrowsRightIconSvg;

DoubleArrowsRightIconSvg.defaultProps = {
  focused: false,
};