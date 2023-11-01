import { Box, Flex } from "@chakra-ui/react";
import {
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import MotionBox from "./MotionBox";
import { useState } from "react";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100, ...rest }) {
  const baseX = useMotionValue(0);
  const [isOnHover, setIsOnHover] = useState(false);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const [directionFactor, setDirectionFactor] = useState(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor * baseVelocity * (delta / 1000);
    if (isOnHover) {
      moveBy /= 2;
    }

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      setDirectionFactor(-1);
    } else if (velocityFactor.get() > 0) {
      setDirectionFactor(1);
    }

    moveBy += directionFactor * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <Box w={"full"} overflowX={"hidden"} {...rest}>
      <Flex
        as={MotionBox}
        flexDir={"row"}
        w={"max-content"}
        flexWrap={"nowrap"}
        style={{ x }}
        onMouseOver={() => setIsOnHover(true)}
        onMouseLeave={() => setIsOnHover(false)}
      >
        {children}
        {children}
        {children}
        {children}
      </Flex>
    </Box>
  );
}

export default ParallaxText;
