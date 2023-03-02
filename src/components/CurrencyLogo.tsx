export const CurrencyLogo: React.FC<{ dataSrc: string; color: string }> = ({
    dataSrc,
    color,
  }) => {
    return (
      <div
        style={{
          mask: `url(${dataSrc}) no-repeat 50% 50%`,
          WebkitMask: `url(${dataSrc}) no-repeat 50% 50%`,
          backgroundImage: `url(${dataSrc})`,
          backgroundSize: `cover`,
          backgroundColor: color,
          maskSize: "cover",
          WebkitMaskSize: "cover",
          width: 32,
          height: 32,
          backgroundBlendMode: "screen"
        }}
      ></div>
    );
  };