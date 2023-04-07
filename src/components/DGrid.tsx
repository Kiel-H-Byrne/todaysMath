import React, { useState } from "react"
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react"
import { DocumentData } from "firebase/firestore"
import { PostShape } from "../db/fsdb"

interface Comment {
  id: string
  message: string
  userId: string
  createdAt: Date
}

interface User {
  id: string
  name: string
  photoURL: string
}

const CommentsSection = ({
  currentComment,
  comments,
  handleSubmit,
  handleChange,
}: {
  currentComment: string
  comments: DocumentData
  handleSubmit: (event: any) => void
  handleChange: (event: any) => void
}) => {
  return (
    <Flex justify="center" mt={8}>
      <Box w="50%" p={4}>
        <form onSubmit={handleSubmit}>
          <Input
            value={currentComment}
            onChange={handleChange}
            placeholder="Enter your comment"
            mb={2}
            variant="filled"
            size="lg"
            resize="none"
            h="auto"
            minH="100px"
          />
          <Button type="submit" colorScheme="blue">
            Comment
          </Button>
        </form>
      </Box>
      <Box w="50%" p={4}>
        {Object.values(comments as PostShape[]).map(
          ({ message, timestamp, userAvatar, userName }, i) => (
            <Flex key={timestamp} mb={4}>
              <Box mr={4}>
                <img
                  src={userAvatar}
                  alt={userName}
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%" }}
                />
              </Box>
              <Box>
                <Text fontWeight="bold">{userName}</Text>
                <Text>{message}</Text>
              </Box>
            </Flex>
          ),
        )}
      </Box>
    </Flex>
  )
}

export default CommentsSection
