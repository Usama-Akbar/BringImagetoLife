var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var multer = require("multer");
var fs = require("fs");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./upload`);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/upload-photo",
  upload.single("file"),
  async function (req, res, next) {
    let file_path = req.file.path;
    let data_file = fs.createReadStream(file_path);
    var axios = require("axios");
    var FormData = require("form-data");
    var image = new FormData();
    image.append("image", data_file);
    image.append("detect_faces", "4");

    var config = {
      method: "POST",
      url: "https://api.d-id.com/images",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik53ek53TmV1R3ptcFZTQjNVZ0J4ZyJ9.eyJpc3MiOiJodHRwczovL2QtaWQudXMuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTE3NzI1NjU5NjY3NzM0NzY5MTYxIiwiYXVkIjpbImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjcwNzQ3MzE1LCJleHAiOjE2NzA4MzM3MTUsImF6cCI6Ikd6ck5JMU9yZTlGTTNFZURSZjNtM3ozVFN3MEpsUllxIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIG9mZmxpbmVfYWNjZXNzIn0.amt7YaGGECYwUaZEZmSNj8K4RhAtQBhc8hQJf465uIR-n4dExRg0x0SiQ5QbtNT1vHQ064Uuty-OV0jEL6MYYvXgnQTa6l4Ja7z8OdAhU55Bv2j9uJcmbsZBcZD4nqgdpbqWvq0IxFS_6OayZXVmNVQ4GHqmaWTYKS_WgXtZ38rMZj08dYO6nRAB_rJuRCe5CBeKhkbQmQfK7Wrcj0XYuVFjqjzEAe34Rr9n8vxqc0OZnGQV4Hc7cKkqsm7XPk0ro5ZMprmlrN4t4tvfMRQjJRqHyMAx0oWhT2Xrh9em6YI37QdcYRo1OqCVThS2q4_0w-BbJ9Wd_XHNxRWf7IhfPg",
        ...image.getHeaders(),
      },
      data: image,
    };
    axios(config)
      .then(function (response) {
        res.send(JSON.stringify(response.data));
        console.log("sent");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
);

// router.post(
//   "/upload-audio",
//   upload.single("audio"),
//   async function (req, res, next) {
//     let file_path = req.file.path;
//     let data_file = fs.createReadStream(file_path);
//     var axios = require("axios");
//     var FormData = require("form-data");
//     var image = new FormData();
//     image.append("audio", data_file);

//     var config = {
//       method: "POST",
//       url: "https://api.d-id.com/audios",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "multipart/form-data",
//         Authorization:
//           "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik53ek53TmV1R3ptcFZTQjNVZ0J4ZyJ9.eyJpc3MiOiJodHRwczovL2QtaWQudXMuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTAyNDE0MDUxNzg3OTM1NDU4NjU1IiwiYXVkIjpbImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjY5NTYwODU1LCJleHAiOjE2Njk2NDcyNTUsImF6cCI6Ikd6ck5JMU9yZTlGTTNFZURSZjNtM3ozVFN3MEpsUllxIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIG9mZmxpbmVfYWNjZXNzIn0.2Av-jcSuGjHoHiqGJIrizIWKcmB95QeIEoa878hvsU8el24qiEvsStk7mqqD4s-X0YJkiauRoyUy5JKUjCRGbGd2uqr-hdZgOXBs5VEXlXCiZfYj7zeXbKWUTvHlZ-irUYtDwvbecQOGCZqVwStzQS658TsK33YzrXlD7BGx49flQANpybRbjH09twn6hUNX8H-XG1EGp8VIvEgKMYwhkEPugVDEc3bko003HLXWvZySHb_pj2WOn9Ge9XnOtFPhYGNoALdiLDj7mzcfMywtzUXXG0I2v0ZcgzG_Jvl6AnL8H7zSLAdgQ6ZaSYxWBO3P4mVFrjT4k42cbfPfJafyaA",
//         ...image.getHeaders(),
//       },
//       data: image,
//     };
//     axios(config)
//       .then(function (response) {
//         res.send(JSON.stringify(response.data));
//         console.log("sent");
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// );
router.post("/get-video", function (req, res, next) {
  console.log(req.body.gender);
  if (req.body.gender === "male") {
    var axios = require("axios");
    var data = `{"script":{"type":"text","provider":{"type":"amazon","voice_id":"Vicki"},"ssml":"false","input":"${req.body.speech}"},"source_url":"${req.body.photourl}"}`;

    var config = {
      method: "post",
      url: "https://api.d-id.com/talks",
      headers: {
        accept: " application/json",
        "content-type": " application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik53ek53TmV1R3ptcFZTQjNVZ0J4ZyJ9.eyJpc3MiOiJodHRwczovL2QtaWQudXMuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTE3NzI1NjU5NjY3NzM0NzY5MTYxIiwiYXVkIjpbImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjcwNzQ3MzE1LCJleHAiOjE2NzA4MzM3MTUsImF6cCI6Ikd6ck5JMU9yZTlGTTNFZURSZjNtM3ozVFN3MEpsUllxIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIG9mZmxpbmVfYWNjZXNzIn0.amt7YaGGECYwUaZEZmSNj8K4RhAtQBhc8hQJf465uIR-n4dExRg0x0SiQ5QbtNT1vHQ064Uuty-OV0jEL6MYYvXgnQTa6l4Ja7z8OdAhU55Bv2j9uJcmbsZBcZD4nqgdpbqWvq0IxFS_6OayZXVmNVQ4GHqmaWTYKS_WgXtZ38rMZj08dYO6nRAB_rJuRCe5CBeKhkbQmQfK7Wrcj0XYuVFjqjzEAe34Rr9n8vxqc0OZnGQV4Hc7cKkqsm7XPk0ro5ZMprmlrN4t4tvfMRQjJRqHyMAx0oWhT2Xrh9em6YI37QdcYRo1OqCVThS2q4_0w-BbJ9Wd_XHNxRWf7IhfPg",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        res.send(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    var axios = require("axios");
    var data = `{"script":{"type":"text","provider":{"type":"amazon","voice_id":"Olivia"},"ssml":"false","input":"${req.body.speech}"},"source_url":${req.body.photourl}}`;

    var config = {
      method: "post",
      url: "https://api.d-id.com/talks",
      headers: {
        accept: " application/json",
        "content-type": " application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik53ek53TmV1R3ptcFZTQjNVZ0J4ZyJ9.eyJpc3MiOiJodHRwczovL2QtaWQudXMuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTAyNDE0MDUxNzg3OTM1NDU4NjU1IiwiYXVkIjpbImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjcwNTE4MzE1LCJleHAiOjE2NzA2MDQ3MTUsImF6cCI6Ikd6ck5JMU9yZTlGTTNFZURSZjNtM3ozVFN3MEpsUllxIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIG9mZmxpbmVfYWNjZXNzIn0.JtSjYXz4siXEq3uilhfZeYlLnC_ZaCgfb6N-VX70b0lOThaTB79mRN2Zjwa2Q_uOM5amfW0imqof0V-draBqjj3le4MYqd1t4yYYayARBLlYNMfeKApHJWDKWz1QmS2HiCBMNWU9Y_x9NDI6RdV-HafVhyMaSS6_Rz-fGEve-6Ly0bnCgTjIPBPbktidIs-sggzW0TTjH-mkXDhZ8lFrNlXGos71I-OVVFSBBLSN6KnzLxARQ0UR_WeL0izqsCnGA5lPq3-wpiLyUWplDplVGDQykE7xY9Do32sDrdbJY2cDXotCilGBkD8-NjodowB8B6cYUgeiXsmXzLj_A2w_kw",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        res.send(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
});
router.post("/get-video-song", function (req, res, next) {
  console.log(req.body);
  var axios = require("axios");
  var data = `{\r\n     "source_url": "${req.body.photourl}",\r\n     "driver_url": "${req.body.songid}", "config": { "mute": false,\r\n"normalization_factor": 1.0 }\r\n}`;
  console.log(data);
  var config = {
    method: "post",
    url: "https://api.d-id.com/animations",
    headers: {
      accept: " application/json",
      "content-type": " application/json",
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik53ek53TmV1R3ptcFZTQjNVZ0J4ZyJ9.eyJpc3MiOiJodHRwczovL2QtaWQudXMuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTE3NzI1NjU5NjY3NzM0NzY5MTYxIiwiYXVkIjpbImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjcwNzQ3MzE1LCJleHAiOjE2NzA4MzM3MTUsImF6cCI6Ikd6ck5JMU9yZTlGTTNFZURSZjNtM3ozVFN3MEpsUllxIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIG9mZmxpbmVfYWNjZXNzIn0.amt7YaGGECYwUaZEZmSNj8K4RhAtQBhc8hQJf465uIR-n4dExRg0x0SiQ5QbtNT1vHQ064Uuty-OV0jEL6MYYvXgnQTa6l4Ja7z8OdAhU55Bv2j9uJcmbsZBcZD4nqgdpbqWvq0IxFS_6OayZXVmNVQ4GHqmaWTYKS_WgXtZ38rMZj08dYO6nRAB_rJuRCe5CBeKhkbQmQfK7Wrcj0XYuVFjqjzEAe34Rr9n8vxqc0OZnGQV4Hc7cKkqsm7XPk0ro5ZMprmlrN4t4tvfMRQjJRqHyMAx0oWhT2Xrh9em6YI37QdcYRo1OqCVThS2q4_0w-BbJ9Wd_XHNxRWf7IhfPg",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});
router.post("/get-video-url", function (req, res, next) {
  console.log(req.body);
  setTimeout(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: req.body.url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik53ek53TmV1R3ptcFZTQjNVZ0J4ZyJ9.eyJpc3MiOiJodHRwczovL2QtaWQudXMuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTE3NzI1NjU5NjY3NzM0NzY5MTYxIiwiYXVkIjpbImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjcwNzQ3MzE1LCJleHAiOjE2NzA4MzM3MTUsImF6cCI6Ikd6ck5JMU9yZTlGTTNFZURSZjNtM3ozVFN3MEpsUllxIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIG9mZmxpbmVfYWNjZXNzIn0.amt7YaGGECYwUaZEZmSNj8K4RhAtQBhc8hQJf465uIR-n4dExRg0x0SiQ5QbtNT1vHQ064Uuty-OV0jEL6MYYvXgnQTa6l4Ja7z8OdAhU55Bv2j9uJcmbsZBcZD4nqgdpbqWvq0IxFS_6OayZXVmNVQ4GHqmaWTYKS_WgXtZ38rMZj08dYO6nRAB_rJuRCe5CBeKhkbQmQfK7Wrcj0XYuVFjqjzEAe34Rr9n8vxqc0OZnGQV4Hc7cKkqsm7XPk0ro5ZMprmlrN4t4tvfMRQjJRqHyMAx0oWhT2Xrh9em6YI37QdcYRo1OqCVThS2q4_0w-BbJ9Wd_XHNxRWf7IhfPg",
      },
    };

    axios(config)
      .then(function (response) {
        res.send(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, 5000);
});

router.post("/get-render-id", function (req, res, next) {
  var axios = require("axios");
  var data = JSON.stringify({
    timeline: {
      background: "#000000",
      tracks: [
        {
          clips: [
            {
              asset: {
                type: "image",
                src: "https://www.dropbox.com/s/m1brm8g8u0w2lv9/1%20copy.jpg?raw=1",
              },
              start: 0,
              length: 5,
              effect: "zoomIn",
            },
          ],
        },
        {
          clips: [
            {
              asset: {
                type: "video",
                src: req.body.url1,
              },
              start: 5,
              length: 3,
              offset: {
                x: -0.25,
                y: 0,
              },
              position: "center",
              fit: "crop",
              scale: 0.5,
            },
          ],
        },
        {
          clips: [
            {
              asset: {
                type: "video",
                src: req.body.url2,
              },
              start: 5,
              length: 3,
              offset: {
                x: 0.25,
                y: 0,
              },
              position: "center",
              fit: "crop",
              scale: 0.5,
            },
          ],
        },
        {
          clips: [
            {
              asset: {
                type: "image",
                src: "https://www.dropbox.com/s/m1brm8g8u0w2lv9/1%20copy.jpg?raw=1",
              },
              start: 8,
              length: 2,
              effect: "zoomIn",
            },
          ],
        },
        {
          clips: [
            {
              asset: {
                type: "audio",
                src: "https://www.dropbox.com/s/dyjowjtsworguhm/jingle-bells-country.mp3?raw=1",
                trim: 2,
              },
              start: 0,
              length: 5,
            },
            {
              asset: {
                type: "html",
                html: "<p> Greeting Message Line 3</p><br><p class ='top'> Greeting Message Line 4</p>",
                css: "p { font-family: 'Quicksand'; font-weight: bold; color: #ffffff; font-size: 72px; line-height: 50%; } .top { font-family: 'Quicksand Light'; font-size: 32px; color: #25d3d0; }",
                width: 800,
                height: 200,
                position: "center",
              },
              start: 0,
              length: 5,
              transition: {
                out: "fade",
              },
              effect: "zoomIn",
            },
          ],
        },
      ],
    },
    output: {
      format: "mp4",
      resolution: "sd",
    },
  });

  var config = {
    method: "post",
    url: "https://api.shotstack.io/stage/render",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-key": "QM9NtgH3RY8fRAt34Saqb57S1Hjp7R8E1zdYOZYG",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});
router.post("/get-render-video", function (req, res, next) {
  var axios = require("axios");

  var config = {
    method: "get",
    url: `https://api.shotstack.io/stage/render/${req.body.id}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-key": "QM9NtgH3RY8fRAt34Saqb57S1Hjp7R8E1zdYOZYG",
    },
  };

  axios(config)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.post("/signup", function (req, res, next) {
  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "mydb",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `(SELECT * FROM users WHERE email = '${req.body.email}')`;
    con.query(sql, function (err, loginresult) {
      if (err) throw err;
      console.log(loginresult);
      console.log(loginresult.length);
      if (loginresult.length === 0) {
        var sql1 = `INSERT INTO users (email,name,password,confirm_password) VALUES ("${req.body.email}","${req.body.name}","${req.body.password}","${req.body.confirmpassword}")`;
        con.query(sql1, function (err, result) {
          if (err) throw err;
          res.send(loginresult);
        });
      } else {
        res.send(loginresult);
      }
    });
  });
});

router.post("/users", function (req, res, next) {
  console.log(req.body.email);
  console.log(req.body.password);
  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "mydb",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `(SELECT * FROM users WHERE email = '${req.body.email}' AND password = '${req.body.password}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
});

module.exports = router;
