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
import { useFirebase } from 'react-redux-firebase';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const firebase = useFirebase();

  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [username, setUsername] = useState(''); // New
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.login({
        email,
        password
      });
      onClose();
    } catch (error) {
      console.error("Authentication Error:", error);
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      console.error("Passwords do not match!");
      return;
    }

    try {
      await firebase.createUser({ email, password }, {username, email}); // Modified
      onClose();
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

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
                <Input placeholder="Email" mb={4} value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Password" mb={4} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </TabPanel>
              <TabPanel>
                <Input placeholder="Username" mb={4} value={username} onChange={(e) => setUsername(e.target.value)} /> {/* New */}
                <Input placeholder="Email" mb={4} value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Password" mb={4} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input placeholder="Confirm Password" mb={4} type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={activeTab === 'login' ? handleLogin : handleRegister}>
            {activeTab === 'login' ? 'Login' : 'Register'}
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;


