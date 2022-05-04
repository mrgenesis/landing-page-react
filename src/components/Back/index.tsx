import { useNavigate } from "react-router-dom";

const Back = () => {
  const navegate = useNavigate();
  navegate(-1);
  return <>...</>
}


export default Back;