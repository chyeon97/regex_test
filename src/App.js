import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./App.css";
function App() {
  const [email, setEmail] = React.useState(""); // 이메일
  const [phone, setPhone] = React.useState(""); // 휴대폰
  const [jumin, setJumin] = React.useState(""); // 주민번호
  const [ip, setIp] = React.useState("");
  const [url, setUrl] = React.useState("");

  const handleChange = (e) => {
    switch (e.target.id) {
      case "emailTxt":
        setEmail(e.target.value);
        break;

      case "phoneTxt":
        setPhone(e.target.value);
        break;

      case "juminTxt":
        setJumin(e.target.value);
        break;

      case "ipTxt":
        setIp(e.target.value);
        break;

      case "urlTxt":
        setUrl(e.target.value);
        break;
      default:
        break;
    }
  };

  const checkBtn = (e) => {
    switch (e.target.id) {
      case "email":
        console.log("email_check");
        checkRegx("email");
        break;

      case "phone":
        console.log("phone_check");
        checkRegx("phone");
        break;

      case "jumin":
        console.log("jumin_check");
        checkRegx("jumin");
        break;

      case "ip":
        console.log("ip_check");
        checkRegx("ip");
        break;

      case "url":
        console.log("url_check");
        checkRegx("url");
        break;
      default:
        break;
    }
  };

  const checkRegx = (id) => {
    switch (id) {
      case "email":
        const regxEmail =
          /[0-9A-Za-z]([\-\_\.]?[0-9A-Za-z])*@[0-9A-Za-z]([\-\_\.]?[0-9A-Za-z])*\.[a-zA-Z]{2,3}$/i;
        if (email.length > 0) {
          regxEmail.test(email) ? alert("이메일 정상") : alert("이메일 비정상");
        } else {
          alert("이메일을 입력하세요");
        }
        break;

      case "phone":
        const regxPhone = /01([0|1|])-(\d{4}-(\d{4}))$/;
        if (phone.length > 0) {
          regxPhone.test(phone)
            ? alert("휴대폰번호 정상")
            : alert("휴대폰번호 비정상");
        } else {
          alert("휴대폰번호를 입력하세요");
        }
        break;

      case "jumin":
        const regxJumin = /\d{6}-[1-4]\d{6}$/;
        if (jumin.length > 0) {
          regxJumin.test(jumin)
            ? alert("주민등록번호 정상")
            : alert("주민등록번호 비정상");
        } else {
          alert("주민등록번호를 입력하세요");
        }
        break;

      case "ip":
        const regxIp = /\d{3}\.\d{3}\.\d{3}\.\d{3}$/gi;
        if (ip.length > 0) {
          regxIp.test(ip) ? alert("ip주소 정상 ") : alert("ip주소 비정상");
        } else {
          alert("ip주소를 입력하세요");
        }
        break;

      case "url":
        const regxUrl =
          /((http(s?))\:\/\/)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/;

        if (url.length > 0) {
          regxUrl.test(url) ? alert("url주소 정상") : alert("url주소 비정상");
        } else {
          alert("url주소를 입력하세요");
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="Title">정규식 과제</div>

      <div className="ComponentLayout">
        <div className="TextLayout">
          <TextField
            id="emailTxt"
            label="이메일"
            variant="outlined"
            placeholder="example@naver.com"
            style={{ width: "100%" }}
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="ButtonLayout">
          <Button
            id="email"
            onClick={checkBtn}
            variant="contained"
            style={{
              width: "100%",
              height: "100%",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            확인
          </Button>
        </div>
      </div>

      <div className="ComponentLayout">
        <div className="TextLayout">
          <TextField
            id="phoneTxt"
            label="휴대폰"
            variant="outlined"
            style={{ width: "100%" }}
            placeholder="010-0000-0000"
            value={phone}
            onChange={handleChange}
          />
        </div>

        <div className="ButtonLayout">
          <Button
            id="phone"
            onClick={checkBtn}
            variant="contained"
            style={{
              width: "100%",
              height: "100%",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            확인
          </Button>
        </div>
      </div>

      <div className="ComponentLayout">
        <div className="TextLayout">
          <TextField
            id="juminTxt"
            label="주민등록번호"
            variant="outlined"
            style={{ width: "100%" }}
            placeholder="970101-2000000"
            value={jumin}
            onChange={handleChange}
          />
        </div>

        <div className="ButtonLayout">
          <Button
            id="jumin"
            onClick={checkBtn}
            variant="contained"
            style={{
              width: "100%",
              height: "100%",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            확인
          </Button>
        </div>
      </div>

      <div className="ComponentLayout">
        <div className="TextLayout">
          <TextField
            id="ipTxt"
            label="IP주소"
            variant="outlined"
            style={{ width: "100%" }}
            placeholder="000.000.000.000"
            value={ip}
            onChange={handleChange}
          />
        </div>

        <div className="ButtonLayout">
          <Button
            id="ip"
            onClick={checkBtn}
            variant="contained"
            style={{
              width: "100%",
              height: "100%",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            확인
          </Button>
        </div>
      </div>

      <div className="ComponentLayout">
        <div className="TextLayout">
          <TextField
            id="urlTxt"
            label="URL"
            variant="outlined"
            style={{ width: "100%" }}
            placeholder="https://www.naver.com"
            value={url}
            onChange={handleChange}
          />
        </div>

        <div className="ButtonLayout">
          <Button
            id="url"
            onClick={checkBtn}
            variant="contained"
            style={{
              width: "100%",
              height: "100%",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
