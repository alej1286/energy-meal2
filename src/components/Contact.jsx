/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  ButtonGroup,
  Button,
  Card,
  Flex,
  Heading,
  Text,
  View,
  useTheme,
  TextField,
  TextAreaField,
  FieldGroupIcon,
  Icon,
  Link,
  Message,
} from "@aws-amplify/ui-react";
import { BsTwitter, BsJournal, BsYoutube } from "react-icons/bs";
import { generateClient } from "aws-amplify/api";
//import { createCandidate } from "../graphql/mutations";
//import { InstagramEmbed } from 'react-social-media-embed';
import { post } from "@aws-amplify/api";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const IconEmail = () => {
  return (
    <Icon
      pathData="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
      ariaLabel=""
    />
  );
};
function Contact({ signOut }) {
  const { tokens } = useTheme();
  const client = generateClient();
  const [showToast, setShowToast] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    try {
      const restOperation = await post({
        apiName: "contactFormApi2",
        path: "/contact",
        options: {
          body: { name, email, message },
        },
      });

      /*  const {body} = await restOperation.response;
    const response = await body.json();
    console.log("POST call Succeeded");
    console.log(response); */

      // Clear the form
      e.target.reset();

      // Show the toast
      setShowToast(true);

      // Hide the toast after 3 seconds
      setTimeout(() => setShowToast(false), 3000);
    } catch (e) {
      console.log("POST call failed: ", JSON.parse(e.response.body));
    }

    /*  const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    //await API.graphql({

    await client.graphql({
      query: createCandidate,
      variables: {
        input: {
          name,
          email,
          message,
        },
      },
    }); */
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      className="mt-24"
    >
      <Helmet>
        <title>Contact Us | Energy Meal</title>
        <meta
          name="description"
          content="Get in touch with us at Energy Meal for personalized meal plans, training programs, and expert advice. Start your journey to a healthier lifestyle today!"
        />
        <meta
          name="keywords"
          content="contact, Energy Meal, healthy meals, diet meals, organic meals, vegan meals, gluten-free meals, personal training, weight loss advice"
        />
      </Helmet>

      {showToast && (
        <Flex
          position="fixed"
          width="100vw"
          top="56px"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Message
            colorTheme="success"
            heading="success"
            overflow="hidden"
            margin="0 0 6px"
            style={{
              borderRadius: "6px 6px 6px 6px",
              padding: "10px 10px 10px 10px",
            }}
          >
            Your message has been sent
          </Message>
        </Flex>
      )}

      <Card
        padding={{ large: tokens.space.xxxl }}
        variation="elevated"
        borderRadius={tokens.radii.medium}
        backgroundColor={tokens.colors.blue[90]}
      >
        <Flex
          direction={{ base: "column", large: "row" }}
          justifyContent={{ large: "center" }}
          gap={tokens.space.xl}
        >
          <Flex direction={"column"} justifyContent="space-between">
            {/* <InstagramEmbed url='https://www.instagram.com/p/Ct-HZtfsIwc/'/> */}
          </Flex>
          <Flex direction={"column"} justifyContent="space-between">
            <View style={{ marginBottom: tokens.space.small }}>
              {/* <h1 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-5">
            Contact Us
            </h1> */}
              <Heading color={tokens.colors.white} level={3}>
                Contact Us
              </Heading>
              <Text color={tokens.colors.neutral[60]}>
                If you have any questions or would like to schedule a
                consultation with me, please do not hesitate to do it
              </Text>
            </View>
            <ButtonGroup
              style={{ marginBottom: tokens.space.small }}
              color={tokens.colors.neutral[20]}
              direction={"column"}
              variation="link"
            >
              <Button
                color={tokens.colors.neutral[40]}
                justifyContent={"start"}
                gap="1rem"
              >
                <a href="tel:+13057858903"> +1(305)785-8903</a>
              </Button>
              <Button
                color={tokens.colors.neutral[40]}
                justifyContent={"start"}
                gap="1rem"
              >
                <IconEmail color={tokens.colors.blue[40]} />{" "}
                <a href={"mailto:rauldiazmirabal3@gmail.com"}>
                  rauldiazmirabal3@gmail.com
                </a>
              </Button>
              <Button
                color={tokens.colors.neutral[40]}
                justifyContent={"start"}
                gap="1rem"
              >
                {" "}
                Florida, United States
              </Button>
            </ButtonGroup>
            <Flex style={{ marginLeft: tokens.space.large }}>
              <Link
                href="https://twitter.com/"
                color={tokens.colors.blue[20]}
                fontSize={"2rem"}
              >
                <Icon ariaLabel="twitter" as={BsTwitter} />
              </Link>
              <Link
                href="https://youtube.com/"
                color={tokens.colors.red[60]}
                fontSize={"2rem"}
              >
                <Icon ariaLabel="youtube" as={BsYoutube} />
              </Link>
              <Link
                href="https://blog.blog.com"
                color={tokens.colors.green[40]}
                fontSize={"2rem"}
              >
                <Icon ariaLabel="blog" as={BsJournal} />
              </Link>
            </Flex>
          </Flex>
          <View
            width={{ base: "70vw", large: "400px" }}
            backgroundColor={tokens.colors.white}
            padding={tokens.space.medium}
            borderRadius={tokens.radii.medium}
          >
            <Flex as="form" direction={"column"} onSubmit={handleFormSubmit}>
              <TextField
                required
                label="Your Name"
                name="name"
                placeholder="Your name"
                innerStartComponent={
                  <FieldGroupIcon ariaLabel=""></FieldGroupIcon>
                }
              />
              <TextField
                label="Email"
                name="email"
                placeholder="you@email.com"
                type={"email"}
                required
                innerStartComponent={
                  <FieldGroupIcon ariaLabel="">
                    <IconEmail />
                  </FieldGroupIcon>
                }
              />
              <TextAreaField
                required
                label="Message"
                name="message"
                placeholder="Enter your message"
              />
              <View style={{ marginTop: tokens.space.medium }}>
                <Button type="submit" variation="primary">
                  Send Message
                </Button>
              </View>
            </Flex>
          </View>
        </Flex>
      </Card>
    </Flex>
  );
}

export default Contact;
