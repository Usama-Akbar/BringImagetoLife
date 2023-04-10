import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import "./style/options.css";
import { notification } from "antd";
import {
  Box,
  Badge,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Radio,
  RadioGroup,
  Spinner,
  Container,
  Heading,
  Stack,
  VStack,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import Anotate from "./Anotate";
function Options() {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [audiofile, setaudiofile] = useState();
  const [dataUri, setDataUri] = useState("");
  const [downurl, setdownurl] = useState("");
  const [speechtab, setspeechtab] = useState(true);
  const [songtab, setsongtab] = useState(false);
  const [speech, setspeech] = useState("");
  const [file1, setfile1] = useState("");
  const [file2, setfile2] = useState("");
  const [file3, setfile3] = useState("");
  const [file4, setfile4] = useState("");
  const [videoids, setvideoids] = useState("");
  const [gender1, setgender1] = useState("");
  const [gender2, setgender2] = useState("");
  const [gender3, setgender3] = useState("");
  const [gender4, setgender4] = useState("");

  const [videos, setvideos] = useState([]);
  const [song, setsong] = useState(
    "bank://classics/driver-here-comes-santa-claus",
  );
  useEffect(() => {
    let user = localStorage.getItem("login");
    if (user === "false" || false) {
      navigate("/");
    }
  }, [null]);

  async function Get_Video_TexttoSpeech() {
    setloading(true);
    let image1 = localStorage.getItem("file1");
    let image2 = localStorage.getItem("file2");
    let image3 = localStorage.getItem("file3");
    let image4 = localStorage.getItem("file4");
    let gender1 = localStorage.getItem("gender1");
    let gender2 = localStorage.getItem("gender2");
    let gender3 = localStorage.getItem("gender3");
    let gender4 = localStorage.getItem("gender4");
    if (image1 !== null) {
      const video_respons = await fetch("/get-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          photourl: image1,
          speech: speech,
          gender: gender1,
        }),
      });
      const result_resp = await video_respons.json();
      console.log(result_resp);
      let apiurl = `https://api.d-id.com/talks/${result_resp.id}`;
      const video_respons_url = await fetch("/get-video-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url: apiurl,
        }),
      });
      const result_resp_url = await video_respons_url.json();
      console.log(result_resp_url.result_url);

      const rendder_video_respons = await fetch("/get-render-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url1: result_resp_url.result_url,
          url2: result_resp_url.result_url,
        }),
      });
      const render_result_resp = await rendder_video_respons.json();
      console.log(render_result_resp.response.id);

      const render_video_result = await fetch("/get-render-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url1: result_resp_url.result_url,
          url2: result_resp_url.result_url,
        }),
      });
      const render_result_resp_ = await render_video_result.json();
      console.log(render_result_resp_.url);
      localStorage.setItem("video1", result_resp_url.result_url);
      localStorage.setItem("template1", render_result_resp_.url);
    }
    if (image2 !== null) {
      const video_respons = await fetch("/get-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          photourl: image2,
          speech: speech,
          gender: gender2,
        }),
      });
      const result_resp = await video_respons.json();
      console.log(result_resp);
      let apiurl = `https://api.d-id.com/talks/${result_resp.id}`;
      const video_respons_url = await fetch("/get-video-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url: apiurl,
        }),
      });
      const result_resp_url = await video_respons_url.json();
      console.log(result_resp_url.result_url);

      const rendder_video_respons = await fetch("/get-render-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url1: result_resp_url.result_url,
          url2: result_resp_url.result_url,
        }),
      });
      const render_result_resp = await rendder_video_respons.json();
      console.log(render_result_resp.response.id);

      const render_video_result = await fetch("/get-render-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url1: result_resp_url.result_url,
          url2: result_resp_url.result_url,
        }),
      });
      const render_result_resp_ = await render_video_result.json();
      console.log(render_result_resp_.url);
      localStorage.setItem("video2", result_resp_url.result_url);
      localStorage.setItem("template2", render_result_resp_.url);
    }
    if (image3 !== null) {
      const video_respons = await fetch("/get-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          photourl: image3,
          speech: speech,
          gender: gender3,
        }),
      });
      const result_resp = await video_respons.json();
      console.log(result_resp);
      let apiurl = `https://api.d-id.com/talks/${result_resp.id}`;
      const video_respons_url = await fetch("/get-video-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url: apiurl,
        }),
      });
      const result_resp_url = await video_respons_url.json();
      console.log(result_resp_url.result_url);

      const rendder_video_respons = await fetch("/get-render-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url1: result_resp_url.result_url,
          url2: result_resp_url.result_url,
        }),
      });
      const render_result_resp = await rendder_video_respons.json();
      console.log(render_result_resp.response.id);

      const render_video_result = await fetch("/get-render-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url1: result_resp_url.result_url,
          url2: result_resp_url.result_url,
        }),
      });
      const render_result_resp_ = await render_video_result.json();
      console.log(render_result_resp_.url);
      localStorage.setItem("video3", result_resp_url.result_url);
      localStorage.setItem("template3", render_result_resp_.url);
    }
    if (image4 !== null) {
      const video_respons = await fetch("/get-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          photourl: image4,
          speech: speech,
          gender: gender4,
        }),
      });
      const result_resp = await video_respons.json();
      console.log(result_resp);
      let apiurl = `https://api.d-id.com/talks/${result_resp.id}`;
      const video_respons_url = await fetch("/get-video-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url: apiurl,
        }),
      });
      const result_resp_url = await video_respons_url.json();
      console.log(result_resp_url.result_url);
      const rendder_video_respons = await fetch("/get-render-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url1: result_resp_url.result_url,
          url2: result_resp_url.result_url,
        }),
      });
      const render_result_resp = await rendder_video_respons.json();
      console.log(render_result_resp.response.id);

      const render_video_result = await fetch("/get-render-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url1: result_resp_url.result_url,
          url2: result_resp_url.result_url,
        }),
      });
      const render_result_resp_ = await render_video_result.json();
      console.log(render_result_resp_.url);
      localStorage.setItem("video4", result_resp_url.result_url);
      localStorage.setItem("template4", render_result_resp_.url);
    }
    setloading(false);
    navigate("/video");
  }

  async function Get_Video_Song() {
    setloading(true);
    let image1 = localStorage.getItem("file1");
    let image2 = localStorage.getItem("file2");
    let image3 = localStorage.getItem("file3");
    let image4 = localStorage.getItem("file4");

    if (image1 !== null) {
      const video_respons = await fetch("/get-video-song", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          photourl: image1,
          songid: song,
        }),
      });
      const result_resp = await video_respons.json();
      console.log(result_resp);
      let apiurl = `https://api.d-id.com/talks/${result_resp.id}`;
      const video_respons_url = await fetch("/get-video-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url: apiurl,
        }),
      });
      const result_resp_url = await video_respons_url.json();
      console.log(result_resp_url.result_url);

      const rendder_video_respons = await fetch("/get-render-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url1: result_resp_url.result_url,
          url2: result_resp_url.result_url,
        }),
      });
      const render_result_resp = await rendder_video_respons.json();
      console.log(render_result_resp.response.id);

      const render_video_result = await fetch("/get-render-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url1: result_resp_url.result_url,
          url2: result_resp_url.result_url,
        }),
      });
      const render_result_resp_ = await render_video_result.json();
      console.log(render_result_resp_.url);
      localStorage.setItem("video1", result_resp_url.result_url);
      localStorage.setItem("template1", render_result_resp_.url);
    }
    if (image2 !== null) {
      const video_respons = await fetch("/get-video-song", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          photourl: image2,
          songid: song,
        }),
      });
      const result_resp = await video_respons.json();
      console.log(result_resp);
      let apiurl = `https://api.d-id.com/talks/${result_resp.id}`;
      const video_respons_url = await fetch("/get-video-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url: apiurl,
        }),
      });
      const result_resp_url = await video_respons_url.json();
      console.log(result_resp_url.result_url);

      const rendder_video_respons = await fetch("/get-render-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url1: result_resp_url.result_url,
          url2: result_resp_url.result_url,
        }),
      });
      const render_result_resp = await rendder_video_respons.json();
      console.log(render_result_resp.response.id);

      const render_video_result = await fetch("/get-render-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url1: result_resp_url.result_url,
          url2: result_resp_url.result_url,
        }),
      });
      const render_result_resp_ = await render_video_result.json();
      console.log(render_result_resp_.url);
      localStorage.setItem("video2", result_resp_url.result_url);
      localStorage.setItem("template2", render_result_resp_.url);
    }
    if (image3 !== null) {
      const video_respons = await fetch("/get-video-song", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          photourl: image3,
          songid: song,
        }),
      });
      const result_resp = await video_respons.json();
      console.log(result_resp);
      let apiurl = `https://api.d-id.com/talks/${result_resp.id}`;
      const video_respons_url = await fetch("/get-video-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url: apiurl,
        }),
      });
      const result_resp_url = await video_respons_url.json();
      console.log(result_resp_url.result_url);

      const rendder_video_respons = await fetch("/get-render-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url1: result_resp_url.result_url,
          url2: result_resp_url.result_url,
        }),
      });
      const render_result_resp = await rendder_video_respons.json();
      console.log(render_result_resp.response.id);

      const render_video_result = await fetch("/get-render-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url1: result_resp_url.result_url,
          url2: result_resp_url.result_url,
        }),
      });
      const render_result_resp_ = await render_video_result.json();
      console.log(render_result_resp_.url);
      localStorage.setItem("video3", result_resp_url.result_url);
      localStorage.setItem("template3", render_result_resp_.url);
    }
    if (image4 !== null) {
      const video_respons = await fetch("/get-video-song", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          photourl: image4,
          songid: song,
        }),
      });
      const result_resp = await video_respons.json();
      console.log(result_resp);
      let apiurl = `https://api.d-id.com/talks/${result_resp.id}`;
      const video_respons_url = await fetch("/get-video-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url: apiurl,
        }),
      });
      const result_resp_url = await video_respons_url.json();
      console.log(result_resp_url.result_url);
      const rendder_video_respons = await fetch("/get-render-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url1: result_resp_url.result_url,
          url2: result_resp_url.result_url,
        }),
      });
      const render_result_resp = await rendder_video_respons.json();
      console.log(render_result_resp.response.id);

      const render_video_result = await fetch("/get-render-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url1: result_resp_url.result_url,
          url2: result_resp_url.result_url,
        }),
      });
      const render_result_resp_ = await render_video_result.json();
      console.log(render_result_resp_.url);
      localStorage.setItem("video4", result_resp_url.result_url);
      localStorage.setItem("template4", render_result_resp_.url);
    }
    setloading(false);
    navigate("/video");
  }

  function StartAnimate() {
    if (speechtab === true) {
      Get_Video_TexttoSpeech();
    } else {
      Get_Video_Song();
    }
  }
  // useEffect(() => {
  //   if (videoids.length > 0) {
  //     videoids.map((d, i) => GetVideos(d));
  //     setTimeout(() => {
  //       setloading(false);
  //       setloading(false);
  //     }, 10000);
  //   }
  // }, [videoids]);
  const onSelect = (selectedId) => {
    setData(selectedId);
  };
  const onChange = (data) => console.log(data);

  useEffect(() => {
    console.log(songtab);
    console.log(speechtab);
  }, [speechtab, songtab]);

  return (
    <div>
      <Box bg="white">
        {loading === true ? (
          <div className="loadingmain">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        ) : null}

        <Container
          maxW={{ base: "container.sm", xl: "container.xl" }}
          pt={{ base: "3rem", md: "4.75rem" }}
          pb={{ base: "3rem", xl: "6.25rem" }}
        >
          <VStack spacing="2rem" px="" py="4rem">
            <Heading color="black" size="lg">
              Choose One Option for Animating Photo
            </Heading>
          </VStack>
          <Tabs>
            <TabList>
              <Tab
                onClick={() => {
                  setspeechtab(true);
                  setsongtab(false);
                }}
              >
                Animate Photo with Text
              </Tab>
              <Tab
                onClick={() => {
                  setspeechtab(false);
                  setsongtab(true);
                }}
              >
                Singing Photo
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Heading mt="2" color="black" size="sm">
                  Enter any Text here that you wants to speak: (same text used
                  for all photos)
                </Heading>
                <Textarea
                  value={speech}
                  onChange={(e) => {
                    setspeech(e.target.value);
                    console.log(speech);
                  }}
                  mt="8"
                  noOfLines={7}
                  outlineColor={"#00000030"}
                  placeholder="Text to Speech"
                  bg="white"
                  resize="none"
                />
              </TabPanel>
              <TabPanel>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="song-options" style={{ width: "35%" }}>
                    <Heading color="black" size="md">
                      Choose one of the following songs :
                    </Heading>
                    <RadioGroup
                      mt="8"
                      onChange={(e) => setsong(e)}
                      value={song}
                    >
                      <Stack>
                        <Radio value="bank://classics/driver-here-comes-santa-claus">
                          Here comes santa clause
                        </Radio>
                        <Radio value="bank://classics/driver-feliz-navidad">
                          Feliz navidad
                        </Radio>
                        <Radio value="bank://classics/driver-rocking-around">
                          Rocking around the Christmas Tree
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </div>
                  <div
                    className="video-gif"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Image
                      style={{ width: "50%" }}
                      rounded={["1rem", "1.5rem", "2rem"]}
                      src={"assets/images/singing.gif"}
                    />
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Box textAlign={"center"}>
            <Button
              disabled={loading === true ? true : false}
              onClick={StartAnimate}
            >
              {loading === true ? <Spinner /> : "Start Animation"}
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
export default Options;
