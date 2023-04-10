import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import "./style/upload.css";
import { notification } from "antd";
import {
  Box,
  Badge,
  Button,
  Radio,
  RadioGroup,
  Container,
  Heading,
  Stack,
  Image,
  VStack,
  Spinner,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import Anotate from "./Anotate";
function Images() {
  const toast = useToast();

  const [data, setData] = useState("");
  const navigate = useNavigate();
  const [file, setfile] = useState();
  const [file2, setfile2] = useState();
  const [file3, setfile3] = useState();
  const [file4, setfile4] = useState();
  const [loading, setloading] = useState(false);
  const [audiofile, setaudiofile] = useState();
  const [dataUri, setDataUri] = useState("");
  const [downurl, setdownurl] = useState("");
  const [value, setValue] = useState("1");
  const [onemale, setonemale] = useState("male");
  const [twomale, settwomale] = useState("male");
  const [threemale, setthreemale] = useState("male");
  const [fourmale, setfourmale] = useState("male");
  const [file1badge, setfile1bade] = useState(false);
  const [file2badge, setfile2bade] = useState(false);
  const [file3badge, setfile3bade] = useState(false);
  const [file4badge, setfile4bade] = useState(false);
  const [spinner, setspinner] = useState(false);
  const [spinner2, setspinner2] = useState(false);
  const [spinner3, setspinner3] = useState(false);
  const [spinner4, setspinner4] = useState(false);
  const [disabled, setdisabled] = useState(false);
  useEffect(() => {
    let user = localStorage.getItem("login");
    if (user === "false" || false) {
      navigate("/");
    }
  }, [null]);

  function Signout() {
    localStorage.setItem("login", false);
    navigate("/");
  }
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    if (file === undefined) {
      api[type]({
        message: "Error",
        description: "Image is not present.",
      });
    } else if (audiofile === undefined) {
      api[type]({
        message: "Error",
        description: "audio is not present.",
      });
    }
  };
  const props = {
    name: "file",
    multiple: false,

    beforeUpload: (e) => {
      return false;
    },
    onChange(info) {
      console.log("FILE", info.file);
      if (info.file.status !== "uploading") {
        let reader = new FileReader();
        reader.readAsDataURL(info.file);
        let data = info.file;
        fileToDataUri(data).then((dataUri) => {
          setDataUri(dataUri);
        });
      }
      Upload_File(info.file);
    },
  };
  const props2 = {
    name: "file",
    multiple: false,

    beforeUpload: (e) => {
      return false;
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        let reader = new FileReader();
        reader.readAsDataURL(info.file);
        let data = info.file;
        fileToDataUri(data).then((dataUri) => {
          setDataUri(dataUri);
        });
      }
      Upload_File2(info.file);
    },
  };
  const props3 = {
    name: "file",
    multiple: false,

    beforeUpload: (e) => {
      return false;
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        let reader = new FileReader();
        reader.readAsDataURL(info.file);
        let data = info.file;
        fileToDataUri(data).then((dataUri) => {
          setDataUri(dataUri);
        });
      }
      Upload_File3(info.file);
    },
  };
  const props4 = {
    name: "file",
    multiple: false,

    beforeUpload: (e) => {
      return false;
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        let reader = new FileReader();
        reader.readAsDataURL(info.file);
        let data = info.file;
        fileToDataUri(data).then((dataUri) => {
          setDataUri(dataUri);
        });
      }
      Upload_File4(info.file);
    },
  };
  async function Upload_File(data) {
    setspinner(true);
    setdisabled(true);
    const _formdata = new FormData();
    _formdata.set("file", data);
    console.log("File", _formdata.get("file"));
    const respons = await fetch("/upload-photo", {
      method: "POST",
      body: _formdata,
    });
    const file_resp = await respons.json();
    console.log(file_resp);
    localStorage.setItem("file1", file_resp.url);
    localStorage.setItem("gender1", onemale);
    setspinner(false);
    setdisabled(false);
    setfile1bade(true);
  }
  async function Upload_File2(data) {
    setspinner2(true);
    setdisabled(true);
    const _formdata = new FormData();
    _formdata.set("file", data);
    console.log("File", _formdata.get("file"));
    const respons = await fetch("/upload-photo", {
      method: "POST",
      body: _formdata,
    });
    const file_resp = await respons.json();
    console.log(file_resp);
    localStorage.setItem("file2", file_resp.url);
    localStorage.setItem("gender2", twomale);

    setspinner2(false);
    setdisabled(false);
    setfile2bade(true);
  }
  async function Upload_File3(data) {
    setspinner3(true);
    setdisabled(true);
    const _formdata = new FormData();
    _formdata.set("file", data);
    console.log("File", _formdata.get("file"));
    const respons = await fetch("/upload-photo", {
      method: "POST",
      body: _formdata,
    });
    const file_resp = await respons.json();
    console.log(file_resp);
    localStorage.setItem("file3", file_resp.url);
    localStorage.setItem("gender3", threemale);

    setspinner3(false);
    setdisabled(false);
    setfile3bade(true);
  }
  async function Upload_File4(data) {
    setspinner4(true);
    setdisabled(true);
    const _formdata = new FormData();
    _formdata.set("file", data);
    console.log("File", _formdata.get("file"));
    const respons = await fetch("/upload-photo", {
      method: "POST",
      body: _formdata,
    });
    const file_resp = await respons.json();
    console.log(file_resp);
    localStorage.setItem("file4", file_resp.url);
    localStorage.setItem("gender4", fourmale);

    setspinner4(false);
    setdisabled(false);
    setfile4bade(true);
  }

  function Done() {
    if (
      file1badge === true ||
      file2badge === true ||
      file3badge === true ||
      file4badge === true
    ) {
      navigate("/options");
    } else {
      toast({
        title: "Error",
        description: "Please Upload at least one Photo.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  const audio_props = {
    name: "file",
    multiple: false,

    beforeUpload: (e) => {
      return false;
    },
    onChange(info) {
      setaudiofile(info.file);
      if (info.file.status !== "uploading") {
        let reader = new FileReader();
        reader.readAsDataURL(info.file);
        let data = info.file;
      }
    },
  };

  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const onResize = () => {
    setPageSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });
  function handleChange1(e) {
    console.log(e);
    setonemale(e);
    localStorage.setItem("gender1", e);
  }
  function handleChange2(e) {
    console.log(e);
    settwomale(e);
    localStorage.setItem("gender2", e);
  }
  function handleChange3(e) {
    console.log(e);
    setthreemale(e);
    localStorage.setItem("gender3", e);
  }
  function handleChange4(e) {
    console.log(e);
    setfourmale(e);
    localStorage.setItem("gender4", e);
  }

  const onSelect = (selectedId) => {
    setData(selectedId);
  };
  const onChange = (data) => console.log(data);
  useEffect(() => {
    console.log(file);
  }, [file]);
  async function SendAttach() {
    if (file === undefined || audiofile === undefined) {
      openNotificationWithIcon("error");
    } else {
      setloading(true);
      const _formdata = new FormData();
      _formdata.set("file", file);
      const respons = await fetch("/upload-photo", {
        method: "POST",
        body: _formdata,
      });
      const file_resp = await respons.json();
      console.log(file_resp);

      const _formdata_audio = new FormData();
      _formdata_audio.set("audio", audiofile);
      const respons_auidio = await fetch("/upload-audio", {
        method: "POST",
        body: _formdata_audio,
      });
      const file_resp_audio = await respons_auidio.json();
      console.log(file_resp_audio);

      const video_respons = await fetch("/get-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          photourl: file_resp.url,
          audiourl: file_resp_audio.url,
        }),
      });
      const result_resp = await video_respons.json();
      console.log(result_resp);
      let url = `https://api.d-id.com/talks/${result_resp.id}`;
      const video_respons_url = await fetch("/get-video-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify({
          id: result_resp.id,
          url: url,
        }),
      });
      const result_resp_url = await video_respons_url.json();
      setTimeout(() => {
        setdownurl(result_resp_url.result_url);

        console.log(result_resp_url.result_url);
      }, 1000);

      setloading(false);
    }
  }

  return (
    <Box bg="white">
      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        // pt={{ base: "3rem", md: "4.75rem" }}
        pb={{ base: "3rem", xl: "6.25rem" }}
      >
        <VStack spacing="2rem" px="" py="4rem">
          <Heading color="black" size="lg">
            Make Your Photo Sing + Make a Holiday Card
          </Heading>
        </VStack>
        <div  className="desktop" style={{  }}>
          <div>
            <Heading
              className="upload-heading"
              style={{ textAlign: "end" }}
              color="black"
              size="md"
            >
              Upload Photos for Animation (max 4)
            </Heading>
            <div className="upload-button">
              <Box mx="4" my="5">
                <Upload maxCount={1} {...props}>
                  <Button disabled={disabled}>
                    {spinner === true ? <Spinner /> : "Upload your Photo"}
                  </Button>
                </Upload>
              </Box>
              <RadioGroup onChange={handleChange1} value={onemale}>
                <Stack direction="row">
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                </Stack>
              </RadioGroup>
              {file1badge === true ? (
                <Badge ml="2" colorScheme="green">
                  Uploaded
                </Badge>
              ) : null}
            </div>
            <div className="upload-button">
              <Box mx="4" my="5">
                <Upload maxCount={1} {...props2}>
                  <Button disabled={disabled}>
                    {spinner2 === true ? <Spinner /> : "Upload your Photo"}
                  </Button>
                </Upload>
              </Box>
              <RadioGroup onChange={handleChange2} value={twomale}>
                <Stack direction="row">
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                </Stack>
              </RadioGroup>
              {file2badge === true ? (
                <Badge ml="2" colorScheme="green">
                  Uploaded
                </Badge>
              ) : null}
            </div>
            <div className="upload-button">
              <Box mx="4" my="5">
                <Upload maxCount={1} {...props3}>
                  <Button disabled={disabled}>
                    {spinner3 === true ? <Spinner /> : "Upload your Photo"}
                  </Button>
                </Upload>
              </Box>
              <RadioGroup onChange={handleChange3} value={threemale}>
                <Stack direction="row">
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                </Stack>
              </RadioGroup>
              {file3badge === true ? (
                <Badge ml="2" colorScheme="green">
                  Uploaded
                </Badge>
              ) : null}
            </div>
            <div className="upload-button">
              <Box mx="4" my="5">
                <Upload maxCount={1} {...props4}>
                  <Button disabled={disabled}>
                    {spinner4 === true ? <Spinner /> : "Upload your Photo"}
                  </Button>
                </Upload>
              </Box>
              <RadioGroup onChange={handleChange4} value={fourmale}>
                <Stack direction="row">
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                </Stack>
              </RadioGroup>
              {file4badge === true ? (
                <Badge ml="2" colorScheme="green">
                  Uploaded
                </Badge>
              ) : null}
            </div>
          </div>
          <div
            className="image1-gif"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Image
              style={{ width: "75%" }}
              rounded={["1rem", "1.5rem", "2rem"]}
              src={"assets/images/uploading.gif"}
            />
          </div>
        </div>
        <Box mt={20} textAlign={"center"}>
          <Button colorScheme="messenger" onClick={Done}>
            Finish Uploading Photos
          </Button>
        </Box>
      </Container>
    </Box>

    // <div>

    //   <div>
    //     <div className="buttons">
    //       <div className="d-flex">
    //         <Upload maxCount={1} {...props}>
    //           <Button icon={<UploadOutlined />}>Upload your photo</Button>
    //         </Upload>

    //         <Upload className="audio_button" maxCount={1} {...audio_props}>
    //           <Button icon={<UploadOutlined />}>Upload your Audio</Button>
    //         </Upload>
    //       </div>

    //       <div style={{ display: "flex", flexDirection: "column" }}>
    //         <Button onClick={SendAttach}>Process Your Video</Button>
    //         {downurl === "" ? null : (
    //           <Button className="mt-3" href={downurl}>
    //             Download your Video
    //           </Button>
    //         )}
    //       </div>
    //     </div>
    //     <div>
    //       <div className="App">
    //         <Anotate image={dataUri} />
    //         {/* <ReactPictureAnnotation
    //             image={dataUri}
    //             onSelect={onSelect}
    //             onChange={onChange}
    //             width={pageSize.width}
    //             height={pageSize.height}
    //             annotationStyle={{
    //               ...defaultShapeStyle,
    //               shapeStrokeStyle: "#2193ff",
    //               transformerBackground: "black",
    //             }}
    //           /> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
export default Images;
