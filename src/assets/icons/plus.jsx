export default function PlusIcon({ color }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8334 6.83171H6.83335V11.8317H5.16669V6.83171H0.166687V5.16504H5.16669V0.165039H6.83335V5.16504H11.8334V6.83171Z"
        fill={color ? color : "#000000"}
      />
    </svg>
  );
}
