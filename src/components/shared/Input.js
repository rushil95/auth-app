import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import styled from "styled-components/macro";


  const InputContainer = styled.div`
    position: relative;
    margin-top : 14.5px;
  `;
  const InputField = styled.input`
    display: block;
    width: 100%;
    padding: 13px;
    padding-left: 46px;
    font-size: 16px;
    font-weight: 400;
    color: #828282;
    border: 1px solid #bdbdbd;
    border-radius: 8px;
  `;

  const Wrapper = styled.div``;

export default function Input(props) {
  const { type } = props;

  const StyledIcon = styled(type === "password" ? MdLock : MdEmail)`
    height: 20px;
    width: 20px;
    color: #828282;
    position: absolute;
    top: 14px;
    left: 15px;
  `;

  return (
    <Wrapper>
      <InputContainer>
        <StyledIcon/>
        <InputField placeholder="Email" {...props} />
      </InputContainer>
    </Wrapper>
  );
}
