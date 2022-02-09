import { useForm } from "react-hook-form"
import React from "react"
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react"

export const Newsletter = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" })

  const onSubmit = (values) => console.log("SUBMITTED")
  //   new Promise(() => {
  //     setTimeout(() => {}, 3000)
  //   })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            id="email"
            type="email"
            placeholder="email"
            autoComplete="off"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email address",
              },
            })}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" type="submit">
              Join
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  )
}
