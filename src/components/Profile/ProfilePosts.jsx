import { Grid } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const  ProfilePosts = () => {
  const [isloading, setIsLoading] = useState(true)

  useEffect(() =>{}, [] )

  return 
    <Grid
    templateColumns={{sm:"repeat(1, 1fr)",md:"repeat(3, 1fr)"}}
    gap={1}
    columnGap={1}
    
    >


    </Grid>

}

export default ProfilePosts
