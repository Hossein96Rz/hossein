import React from "react";
import classNames from "classnames";
import Image from "next/image";

const CustomIcon = (props) => {
  const {
    src,
    color,
    size = "16",
    className,
    cursor = props.cursor ? props.cursor : "pointer",
    name,
    ...rest
  } = props;

  return (
    <>
      {!!color ? (
        <>
          <style jsx="true">{`
            .iconStyle-${name} {
              cursor: ${cursor};
              width: ${size}px;
              height: ${size}px;
              background: ${color};
              mask-image: url(${src});
              -webkit-mask-image: url(${src});
              // mask-box-image: url(${src});
              // webkit-mask-box-image: url(${src});
              mask-repeat: no-repeat;
              -webkit-mask-repeat: no-repeat;
              mask-size: contain;
              -webkit-mask-size: contain;
              object-fit: cover;
              display: inline-block;
              // transition: 0.2s ease;
            }
          `}</style>
          <i className={classNames(`iconStyle-${name}`, className)} {...rest} />
        </>
      ) : (
        <Image
          src={src}
          width={size}
          height={size}
          alt={name || "icon"}
          style={{ cursor: cursor }}
          className={className}
          {...rest}
        />
      )}
    </>
  );
};

export default CustomIcon;
