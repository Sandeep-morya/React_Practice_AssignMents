import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";
import image from "../../public/vite.svg";

import { errorPageStyle } from "../styles/errorPageStyle";
import { useNavigate } from "react-router-dom";
import { sendToCloud } from "../main";

export default function NotFoundImage() {
  const { classes } = errorPageStyle();
  const navigate = useNavigate();
  const handleClick = () => {
    sendToCloud("index", 0);
    navigate("/");
  };
  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={80} cols={2}>
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
            onClick={handleClick}
          >
            Get back to home page
          </Button>
        </div>
        <Image src={image} width={200} />
      </SimpleGrid>
    </Container>
  );
}
