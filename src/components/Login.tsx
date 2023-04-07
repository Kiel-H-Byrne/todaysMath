import { useState } from "react"
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
} from "../db/auth"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react"
import { validateEmail, validatePassword } from "../utils"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  const validate = (type: string) => {
    if (type === "email") {
      if (!validateEmail(email)) {
        console.error("Invalid email address")
        return
      }
    }
    if (type === "password") {
      if (!validatePassword(password)) {
        console.error("Invalid password")
        return
      }
    }
  }
  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    validate("email")
    validate("password")
    try {
      const user = await doCreateUserWithEmailAndPassword(email, password)
      console.log("User created:", user)
      setIsSignUpOpen(false)
    } catch (error) {
      console.error("Error creating user:", error)
    }
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    validate("email")
    validate("password")
    try {
      const user = await doSignInWithEmailAndPassword(email, password)
      console.log("User signed in:", user)
      setIsLoginOpen(false)
    } catch (error) {
      console.error("Error signing in:", error)
    }
  }

  return (
    <>
      <Button variant="outline" onClick={() => setIsSignUpOpen(true)}>
        Sign up
      </Button>
      <Button ml={3} onClick={() => setIsLoginOpen(true)}>
        Log in
      </Button>

      {/* Sign up modal */}
      <Modal
        isOpen={isSignUpOpen}
        isCentered
        onClose={() => setIsSignUpOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalBody>
            <form onSubmit={handleCreateUser}>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button mt={8} type="submit" colorScheme="blue">
                Sign up
              </Button>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsSignUpOpen(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Log in modal */}
      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log In</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSignIn}>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button mt={8} type="submit" colorScheme="blue">
                Log in
              </Button>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsLoginOpen(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Login
