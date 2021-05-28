import styled from "styled-components/macro";
import { color, space, layout, typography } from "styled-system";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";

export const MenuCard = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 15px 12px;
  border-radius: 12px;
  min-width: 180px;
  position: absolute;
  right: 10px;
  top: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  display: none;

  &:hover{
      display : inline-block;
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 8px;
  &:hover {
    background: ${({ theme }) => "#F2F2F2"};
  }
  border-radius: 8px;
  cursor: pointer;
  ${color}
  ${space}
`;

const MenuItemIcon = function (props) {
  const { icon, ...restProps } = props;

  const Icon = styled(icon)`
    font-size: 16px;
  `;

  return <Icon {...restProps} />;
};

const MenuItemText = styled.p`
  display: inline-block;
  margin-left: 12px;
  font-size: 14px;
`;

const MenuItemContainer = styled.div`
  border-bottom: 1px solid #e0e0e0;
`;

export default function Menu() {
  return (
    <MenuCard>
      <MenuItemContainer>
        <MenuItem mb={10}>
          <MenuItemIcon icon={CgProfile} />
          <MenuItemText>My Profile</MenuItemText>
        </MenuItem>
      </MenuItemContainer>
      <MenuItem color="#EB5757" mt={10}>
        <MenuItemIcon icon={IoLogOutOutline} />
        <MenuItemText>Logout</MenuItemText>
      </MenuItem>
    </MenuCard>
  );
}
