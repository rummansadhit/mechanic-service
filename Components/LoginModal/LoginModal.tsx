// components/LoginModal.tsx

import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{activeTab === 'login' ? 'Login' : 'Register'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs variant="enclosed" isFitted onChange={(index) => setActiveTab(index === 0 ? 'login' : 'register')}>
            <TabList mb="1em">
              <Tab>Login</Tab>
              <Tab>Register</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Input placeholder="Email" mb={4} />
                <Input placeholder="Password" mb={4} type="password" />
              </TabPanel>
              <TabPanel>
                <Input placeholder="Email" mb={4} />
                <Input placeholder="Password" mb={4} type="password" />
                <Input placeholder="Confirm Password" mb={4} type="password" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            {activeTab === 'login' ? 'Login' : 'Register'}
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;
