import { SVGProps, useState } from "react";

interface LoteriasCaixaIconProps {
  primaryColor?: string;
  secondaryColor?: string;
  handleMouseOver?: () => void;
}

const LoteriasCaixaIcon = ({
  primaryColor = "currentColor",
  secondaryColor = "currentColor",
  ...props
}: SVGProps<SVGSVGElement> & LoteriasCaixaIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={500}
      height={500}
      viewBox="0 0 375 375"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path d="M195 10h173v174H195Zm0 0" />
        </clipPath>
        <clipPath id="b">
          <path d="m245.613-20.617 148.782 148.781-125.36 125.36-148.781-148.782Zm0 0" />
        </clipPath>
        <clipPath id="c">
          <path d="M235.633 12.676c-30.281 7.402-40.567 33.804-40.172 53.664l2.402 116.012 114.559 1.359c19.89-1.055 34.61-8.55 44.973-22.926 14.34-19.879 13.515-47.254-2.008-66.566-9.532-11.832-22.875-19.13-37.621-20.489a53.543 53.543 0 0 0-11.793.207 56.81 56.81 0 0 0-.223-13.8c-2.223-16.297-11.215-30.883-24.715-40.032-12.797-8.652-29.34-11.363-45.402-7.43Zm0 0" />
        </clipPath>
        <clipPath id="d">
          <path d="M17 191h173v173H17Zm0 0" />
        </clipPath>
        <clipPath id="e">
          <path d="M139.266 395.504-9.516 246.723l125.364-125.36 148.777 148.778Zm0 0" />
        </clipPath>
        <clipPath id="f">
          <path d="M149.25 362.21c30.277-7.405 40.563-33.804 40.172-53.663l-2.406-116.012-114.559-1.36c-19.89 1.055-34.61 8.552-44.973 22.927-14.34 19.878-13.515 47.25 2.008 66.562 9.531 11.836 22.875 19.129 37.621 20.492 3.969.367 7.918.29 11.793-.207-.484 4.492-.414 9.121.223 13.797 2.223 16.3 11.215 30.883 24.715 40.035 12.797 8.653 29.34 11.364 45.406 7.43Zm0 0" />
        </clipPath>
        <clipPath id="g">
          <path d="M195 190h174v173H195Zm0 0" />
        </clipPath>
        <clipPath id="h">
          <path d="M399.547 240.82 250.766 389.602l-125.36-125.364 148.781-148.777Zm0 0" />
        </clipPath>
        <clipPath id="i">
          <path d="M366.254 230.836c-7.402-30.281-33.8-40.563-53.664-40.172l-116.012 2.406-1.355 114.559c1.05 19.89 8.55 34.61 22.922 44.973 19.878 14.34 47.253 13.511 66.566-2.008 11.832-9.531 19.129-22.875 20.488-37.621a53.583 53.583 0 0 0-.207-11.797c4.496.488 9.121.418 13.801-.219 16.297-2.223 30.883-11.219 40.031-24.715 8.656-12.797 11.363-29.344 7.43-45.406Zm0 0" />
        </clipPath>
        <clipPath id="j">
          <path d="M15 12h174v173H15Zm0 0" />
        </clipPath>
        <clipPath id="k">
          <path d="m-16.168 134.066 148.781-148.78 125.36 125.362L109.19 259.426Zm0 0" />
        </clipPath>
        <clipPath id="l">
          <path d="M17.125 144.047c7.402 30.281 33.805 40.566 53.664 40.176l116.012-2.407 1.36-114.558c-1.056-19.89-8.552-34.61-22.927-44.973-19.879-14.34-47.254-13.515-66.566 2.008-11.832 9.531-19.129 22.875-20.488 37.621a53.543 53.543 0 0 0 .207 11.793c-4.492-.484-9.121-.414-13.797.223-16.3 2.222-30.887 11.215-40.035 24.715-8.653 12.796-11.364 29.34-7.43 45.402Zm0 0" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <g clipPath="url(#c)">
            <path
              fill={primaryColor}
              d="m249.746-12.625 141.066 141.063L267.38 251.87 126.316 110.805Zm0 0"
            />
          </g>
        </g>
      </g>
      <g clipPath="url(#d)">
        <g clipPath="url(#e)">
          <g clipPath="url(#f)">
            <path
              fill={primaryColor}
              d="M135.133 387.512-5.934 246.449 117.5 123.016l141.063 141.066Zm0 0"
            />
          </g>
        </g>
      </g>
      <g clipPath="url(#g)">
        <g clipPath="url(#h)">
          <g clipPath="url(#i)">
            <path
              fill={secondaryColor}
              d="M391.559 244.953 250.492 386.02 127.06 262.586 268.125 121.52Zm0 0"
            />
          </g>
        </g>
      </g>
      <g clipPath="url(#j)">
        <g clipPath="url(#k)">
          <g clipPath="url(#l)">
            <path
              fill={secondaryColor}
              d="M-8.176 129.934 132.887-11.133 256.32 112.301 115.254 253.363Zm0 0"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
export default LoteriasCaixaIcon;
