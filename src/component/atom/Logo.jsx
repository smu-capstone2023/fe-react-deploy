import { Image } from "@chakra-ui/react";
export const Logo = ({ width }) => {
    return <Image src="../../img/logo.svg" w={`${width}em`} mt={".2rem"} />;
};

export default Logo;
