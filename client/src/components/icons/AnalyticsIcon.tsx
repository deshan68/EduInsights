const AnalyticsIcon = ({ color }: { color?: string }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="15px"
        viewBox="0 -960 960 960"
        width="15px"
        fill={color}
      >
        <path d="M192-192v-384h144v384H192Zm0-432v-144h144v144H192Zm216 432v-288h144v288H408Zm0-336v-144h144v144H408Zm216 336v-192h144v192H624Zm0-240v-144h144v144H624Z" />
      </svg>
    </div>
  );
};

export default AnalyticsIcon;