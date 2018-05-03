import React, { Component } from 'react';
import { styled } from 'theming';
import { TemplateStore } from '../stores';

const HeaderWrapper = styled.div`
  display: flex;
  height: 48px;
  color: ${({ theme }) => theme.header.foreground};
  background: ${({ theme }) => theme.header.background};
`;

const Banner = styled.a`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 8px;
  font-size: 16px;
  user-select: none;
  cursor: pointer;
  color: ${({ theme }) => theme.banner.foreground};
`;

const Svg = styled.svg`
  margin-right: 8px;
  fill: currentColor;
`;

const AppLogo = Svg.extend`
  width: 32px;
  height: 32px;
`;

const VerticalLine = styled.div`
  align-self: center;
  height: 20px;
  margin-left: 20px;
  border-left: 0.5px solid ${({ theme }) => theme.foreground};
  border-right: 0.5px solid ${({ theme }) => theme.foreground};
  opacity: 0.5;
`;

const Nav = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 15px;
  padding: 0;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 12px;
  padding: 0;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.header.hoverForeground};
  }
`;

const Icon = Svg.extend`
  width: 16px;
  height: 16px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
  cursor: pointer;
`;

interface HeaderProps {
  templateStore: TemplateStore;
}

export class Header extends Component<HeaderProps, {}> {
  isJsonFile = (mimeType: string) => {
    const validJson = mimeType.includes('json');
    return validJson;
  };

  isNotJsonFile = (mimeType: string) => {
    return !this.isJsonFile(mimeType);
  };

  handleFileImport = (selectedFile: FileList) => {
    const undetermined = '';
    const file = selectedFile.item(0);
    if (file === null) {
      return;
    }
    // continue w/ filereader if file type is undetermined by browser
    if (file.type !== undetermined && this.isNotJsonFile(file.type)) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onloadend = () => this.props.templateStore.updateTemplate(fileReader.result);
    fileReader.readAsText(file, 'UTF8');
  };

  render() {
    return (
      <HeaderWrapper>
        <Banner>
          <AppLogo width="32" height="32" viewBox="0 0 1024 1024">
            <path d="M491 149l362 209v333L491 900 128 691V358l363-209zM213 402v244l278 159 277-159V402L491 243 213 402z" />
            <path d="M448 584v291h85V585l290-167-42-74-289 167-289-167-43 74 288 166z" />
          </AppLogo>
          <div>Azure Visualizer</div>
        </Banner>
        <VerticalLine />
        <Nav>
          <NavItem>
            <Label htmlFor="fileImport">
              <Icon width="16" height="16" viewBox="0 0 1024 1024">
                <path d="M859 795l16 16H107l85-86 299-298 65 64h-1l304 304zm-196-70L489 557 321 725h342zM128 299h725v85H128v-85z" />
              </Icon>
              <div>Import</div>
            </Label>
            {/* tslint:disable-next-line:jsx-no-lambda */}
            <HiddenInput type="file" id="fileImport" onChange={e => this.handleFileImport(e.target.files)} />
          </NavItem>
          <NavItem>
            <Icon width="16" height="16" viewBox="0 0 1024 1024">
              <path d="M859 315l16-16H107l85 85 299 298v1l65-65h-1l304-303zm-196 69L489 552 321 384h342zM128 811h725v-86H128v86z" />
            </Icon>
            <div>Export</div>
          </NavItem>
        </Nav>
      </HeaderWrapper>
    );
  }
}
