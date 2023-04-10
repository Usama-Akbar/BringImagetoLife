import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import "./style/video.css";
import { notification } from "antd";
import {
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from "video-react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import ReactPlayer from "react-player";
import {
  Box,
  Badge,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Heading,
  Stack,
  VStack,
  Image,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import Anotate from "./Anotate";
import { ReactVideoPlayer } from "video-player-for-react";
import "video-player-for-react/dist/index.css";
import { Media, Player, controls } from "react-media-player";
import { Card, Radio, Modal } from "antd";

function Video() {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const [file, setfile] = useState();
  const [video1, setvideo1] = useState("");
  const [video2, setvideo2] = useState("");
  const [video3, setvideo3] = useState("");
  const [video4, setvideo4] = useState("");
  const [template1, settemplate1] = useState("");
  const [template2, settemplate2] = useState("");
  const [template3, settemplate3] = useState("");
  const [template4, settemplate4] = useState("");

  const [loading, setloading] = useState(false);
  const [audiofile, setaudiofile] = useState();
  const [dataUri, setDataUri] = useState("");
  const [videofile, setvideofile] = useState("");
  const [downurl, setdownurl] = useState("");
  const [value, setValue] = useState("1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [isModalOpen5, setIsModalOpen5] = useState(false);
  const [isModalOpen6, setIsModalOpen6] = useState(false);
  const [isModalOpen7, setIsModalOpen7] = useState(false);
  const [isModalOpen8, setIsModalOpen8] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const { PlayPause, MuteUnmute } = controls;
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "50.0",
          },
        },
      ],
    });
  };
  useEffect(() => {
    setvideo1(localStorage.getItem("video1"));
    setvideo2(localStorage.getItem("video2"));
    setvideo3(localStorage.getItem("video3"));
    setvideo4(localStorage.getItem("video4"));
    settemplate1(localStorage.getItem("template1"));
    settemplate2(localStorage.getItem("template2"));
    settemplate3(localStorage.getItem("template3"));
    settemplate4(localStorage.getItem("template4"));
  }, [null]);

  useEffect(() => {
    console.log(video1);
    console.log(video2);
    console.log(video4);
    console.log(template1);
    console.log(template2);
    console.log(template3);
    console.log(template4);
  });
  const onApprove = (data, actions) => {
    return actions.order.capture();
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleOk2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };
  const showModal3 = () => {
    setIsModalOpen3(true);
  };

  const handleOk3 = () => {
    setIsModalOpen3(false);
  };
  const handleCancel3 = () => {
    setIsModalOpen3(false);
  };
  const showModal4 = () => {
    setIsModalOpen4(true);
  };

  const handleOk4 = () => {
    setIsModalOpen4(false);
  };
  const handleCancel4 = () => {
    setIsModalOpen4(false);
  };

  const showModal5 = () => {
    setIsModalOpen5(true);
  };

  const handleOk5 = () => {
    setIsModalOpen5(false);
  };
  const handleCancel5 = () => {
    setIsModalOpen5(false);
  };

  const showModal6 = () => {
    setIsModalOpen6(true);
  };

  const handleOk6 = () => {
    setIsModalOpen6(false);
  };
  const handleCancel6 = () => {
    setIsModalOpen6(false);
  };

  const showModal7 = () => {
    setIsModalOpen7(true);
  };

  const handleOk7 = () => {
    setIsModalOpen7(false);
  };
  const handleCancel7 = () => {
    setIsModalOpen7(false);
  };

  const showModal8 = () => {
    setIsModalOpen8(true);
  };

  const handleOk8 = () => {
    setIsModalOpen8(false);
  };
  const handleCancel8 = () => {
    setIsModalOpen8(false);
  };

  const showPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };
  const handlePaymentOk = () => {
    setIsPaymentModalOpen(false);
  };
  const handlePaymentCancel = () => {
    setIsPaymentModalOpen(false);
  };
  useEffect(() => {
    let user = localStorage.getItem("login");
    if (user === "false" || false) {
      navigate("/");
    }
  }, [null]);

  return (
    <Box bg="white">
      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        pt={{ base: "3rem", md: "4.75rem" }}
        pb={{ base: "3rem", xl: "6.25rem" }}
      >
        <Heading mb="4" color="black" size="md">
          Animated Video Files
        </Heading>

        <div className="video-cards" style={{ display: "flex" }}>
          <Card
            size="small"
            title="Video 1"
            extra={<a onClick={showPaymentModal}>Download</a>}
            style={{ width: 300, margin: "0px 5px" }}
          >
            <Image
              onClick={showModal}
              style={{ cursor: "pointer", borderRadius: "10px" }}
              src={"assets/images/video_thumbnail.png"}
              maxW={["7rem", "8rem", "10rem", "15rem", "auto"]}
              shadow="2xl"
              alt="Hero image"
            />
          </Card>
          {video2 === null || video2 === "" ? null : (
            <Card
              size="small"
              title="Video 2"
              extra={<a onClick={showPaymentModal}>Download</a>}
              style={{ width: 300, margin: "0px 5px" }}
            >
              <Image
                onClick={showModal2}
                style={{ cursor: "pointer", borderRadius: "10px" }}
                src={"assets/images/video_thumbnail.png"}
                maxW={["7rem", "8rem", "10rem", "15rem", "auto"]}
                shadow="2xl"
                alt="Hero image"
              />
            </Card>
          )}
          {video3 !== null || video3 !== "" ? null : (
            <Card
              size="small"
              title="Video 3"
              extra={<a onClick={showPaymentModal}>Download</a>}
              style={{ width: 300, margin: "0px 5px" }}
            >
              <Image
                onClick={showModal3}
                style={{ cursor: "pointer", borderRadius: "10px" }}
                src={"assets/images/video_thumbnail.png"}
                maxW={["7rem", "8rem", "10rem", "15rem", "auto"]}
                shadow="2xl"
                alt="Hero image"
              />
            </Card>
          )}
          {video4 !== null || video4 !== "" ? null : (
            <Card
              size="small"
              title="Video 4"
              extra={<a onClick={showPaymentModal}>Download</a>}
              style={{ width: 300, margin: "0px 5px" }}
            >
              <Image
                onClick={showModal4}
                style={{ cursor: "pointer", borderRadius: "10px" }}
                src={"assets/images/video_thumbnail.png"}
                maxW={["7rem", "8rem", "10rem", "15rem", "auto"]}
                shadow="2xl"
                alt="Hero image"
              />
            </Card>
          )}

          <Modal
            title="Basic Modal"
            open={isPaymentModalOpen}
            onOk={handlePaymentOk}
            onCancel={handlePaymentCancel}
          >
            <PayPalScriptProvider
              options={{
                "client-id":
                  "AfGLNw_hBLmdQnFTRz7GupJ45ZxgQUnOhILzjym4ovDYlrDoJnuCXYaFZUe-pCF611pJb3MkZMttM0PZ",
              }}
            >
              <PayPalButtons
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
                style={{ layout: "horizontal" }}
              />
            </PayPalScriptProvider>
          </Modal>
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <video
              class="banner-video"
              id="desc_video"
              autoPlay
              loop=""
              muted=""
              __idm_id__="311297"
            >
              <source type="video/mp4" src={video1} />
            </video>
          </Modal>
          <Modal
            title="Basic Modal"
            open={isModalOpen2}
            onOk={handleOk2}
            onCancel={handleCancel2}
          >
            <video
              class="banner-video"
              id="desc_video"
              autoPlay
              loop=""
              muted=""
              __idm_id__="311297"
            >
              <source type="video/mp4" src={video2} />
            </video>
          </Modal>
          <Modal
            title="Basic Modal"
            open={isModalOpen3}
            onOk={handleOk3}
            onCancel={handleCancel3}
          >
            <video
              class="banner-video"
              id="desc_video"
              autoPlay
              loop=""
              muted=""
              __idm_id__="311297"
            >
              <source type="video/mp4" src={video3} />
            </video>
          </Modal>
          <Modal
            title="Basic Modal"
            open={isModalOpen4}
            onOk={handleOk4}
            onCancel={handleCancel4}
          >
            <video
              class="banner-video"
              id="desc_video"
              autoPlay
              loop=""
              muted=""
              __idm_id__="311297"
            >
              <source type="video/mp4" src={video4} />
            </video>
          </Modal>
          <Modal
            title="Basic Modal"
            open={isModalOpen5}
            onOk={handleOk5}
            onCancel={handleCancel5}
          >
            <video
              class="banner-video"
              id="desc_video"
              autoPlay
              loop=""
              muted=""
              __idm_id__="311297"
            >
              <source type="video/mp4" src={template1} />
            </video>
          </Modal>
          <Modal
            title="Basic Modal"
            open={isModalOpen6}
            onOk={handleOk6}
            onCancel={handleCancel6}
          >
            <video
              class="banner-video"
              id="desc_video"
              autoPlay
              loop=""
              muted=""
              __idm_id__="311297"
            >
              <source type="video/mp4" src={template2} />
            </video>
          </Modal>
          <Modal
            title="Basic Modal"
            open={isModalOpen7}
            onOk={handleOk7}
            onCancel={handleCancel7}
          >
            <video
              class="banner-video"
              id="desc_video"
              autoPlay
              loop=""
              muted=""
              __idm_id__="311297"
            >
              <source type="video/mp4" src={template3} />
            </video>
          </Modal>
          <Modal
            title="Basic Modal"
            open={isModalOpen8}
            onOk={handleOk8}
            onCancel={handleCancel8}
          >
            <video
              class="banner-video"
              id="desc_video"
              autoPlay
              loop=""
              muted=""
              __idm_id__="311297"
            >
              <source type="video/mp4" src={template4} />
            </video>
          </Modal>
        </div>
        <Heading mb="4" color="black" size="md">
          Choose One Card Template
        </Heading>

        <div className="video-cards" style={{ display: "flex" }}>
          <Card
            size="small"
            title="Template 1"
            extra={<a onClick={showPaymentModal}>Download</a>}
            style={{ width: 300, margin: "0px 5px" }}
          >
            <Image
              onClick={showModal5}
              style={{ cursor: "pointer", borderRadius: "10px" }}
              src={"assets/images/video_thumbnail.png"}
              maxW={["7rem", "8rem", "10rem", "15rem", "auto"]}
              shadow="2xl"
              alt="Hero image"
            />
          </Card>
          {template2 === null || template2 === "" ? null : (
            <Card
              size="small"
              title="Template 2"
              extra={<a onClick={showPaymentModal}>Download</a>}
              style={{ width: 300, margin: "0px 5px" }}
            >
              <Image
                onClick={showModal6}
                style={{ cursor: "pointer", borderRadius: "10px" }}
                src={"assets/images/video_thumbnail.png"}
                maxW={["7rem", "8rem", "10rem", "15rem", "auto"]}
                shadow="2xl"
                alt="Hero image"
              />
            </Card>
          )}
          {template3 === null || template3 === "" ? null : (
            <Card
              size="small"
              title="Template 3"
              extra={<a onClick={showPaymentModal}>Download</a>}
              style={{ width: 300, margin: "0px 5px" }}
            >
              <Image
                onClick={showModal7}
                style={{ cursor: "pointer", borderRadius: "10px" }}
                src={"assets/images/video_thumbnail.png"}
                maxW={["7rem", "8rem", "10rem", "15rem", "auto"]}
                shadow="2xl"
                alt="Hero image"
              />
            </Card>
          )}
          {template4 === null || template4 === "" ? null : (
            <Card
              size="small"
              title="Template 4"
              extra={<a onClick={showPaymentModal}>Download</a>}
              style={{ width: 300, margin: "0px 5px" }}
            >
              <Image
                onClick={showModal8}
                style={{ cursor: "pointer", borderRadius: "10px" }}
                src={"assets/images/video_thumbnail.png"}
                maxW={["7rem", "8rem", "10rem", "15rem", "auto"]}
                shadow="2xl"
                alt="Hero image"
              />
            </Card>
          )}
        </div>
      </Container>
    </Box>
  );
}
export default Video;
