import { useState, useEffect } from "react"
import {
  Avatar,
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react"

import { useAuth } from "../db/auth"

interface ProfileData {
  displayName: string
  photoURL: string
}

function AvatarProfile() {
  const { user: currentUser, isLoading } = useAuth()
  console.log(currentUser)
  const [profileData, setProfileData] = useState<ProfileData>({
    displayName: "",
    photoURL: "",
  })
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (currentUser) {
      setProfileData({
        displayName: currentUser.displayName || "",
        photoURL: currentUser.photoURL || "",
      })
    }
  }, [currentUser])

  const handleEditProfile = async () => {
    try {
      // await updateProfile(profileData)
      setIsModalOpen(false)
    } catch (error) {
      console.error("Error updating profile:", error)
    }
  }

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleDisplayNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, displayName: e.target.value })
  }

  const handlePhotoURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, photoURL: e.target.value })
  }

  return (
    <Box>
      <Flex alignItems="center" onClick={handleModalOpen}>
        <Avatar
          src={profileData.photoURL}
          name={profileData.displayName}
          size="md"
        />
        <Text ml="2">{profileData.displayName}</Text>
      </Flex>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb="4">
              <FormLabel>Display Name</FormLabel>
              <Input
                type="text"
                value={profileData.displayName}
                onChange={handleDisplayNameChange}
              />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>Photo URL</FormLabel>
              <Input
                type="text"
                value={profileData.photoURL}
                onChange={handlePhotoURLChange}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleEditProfile}>
              Save
            </Button>
            <Button ml="2" onClick={handleModalClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default AvatarProfile
