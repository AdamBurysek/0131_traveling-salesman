interface VIDAhexagonProps {
  color: string;
}

const VIDAhexagonImg: React.FC<VIDAhexagonProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="222"
      height="207"
      viewBox="0 0 222 207"
      fill="none"
    >
      <path
        d="M182.594 99.1036L216.396 83.44L180.934 70.7073L180.036 70.3849L179.722 69.4839L163.195 22.1197L80.7231 2.53502L2.67722 74.0464L16.7905 161.72L79.8734 203.968L164.475 170.305L181.492 100.445L181.72 99.5087L182.594 99.1036Z"
        fill="white"
        stroke={color}
        strokeWidth="4"
      />
    </svg>
  );
};

export default VIDAhexagonImg;
