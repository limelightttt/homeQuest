
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledToastContainer = styled(ToastContainer).attrs({
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
})`
  .Toastify__toast {
    background-color: #ffffff;
    color: #000000;
    font-weight: bold;
    border-radius: 8px;
  }

  .Toastify__progress-bar {
    background: #ff3b3f;
  }
`;
