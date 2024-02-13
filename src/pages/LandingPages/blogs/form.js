import { useState, useEffect } from "react";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { notification } from "antd";
import PropTypes from 'prop-types';
import { decodeToken } from "configs/jwtTokenImplementations";
import { getToken } from "configs/jwtTokenImplementations";
import AWS from 'aws-sdk';
import { blogPostService } from "../SignIn/services";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
  image: Yup.mixed().required("Image is required"),
});

function AddBlogPost({ blogPostId }) {
  const [api, contextHolder] = notification.useNotification();
  const token = getToken();
  const [selectedImage, setSelectedImage] = useState(null);
  
  useEffect(() => {
  }, [blogPostId]);
  
  const formik = useFormik({
    initialValues: {
      userId: decodeToken(token).userId,
      title: "",
      content: "",
      image: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const imageUrl = await uploadImage(values.image);
        const data = { ...values, imageUrl };
        blogPostService.addNewBlogPost(data).then(() => { openNotification(); });
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    },
  });

  const uploadImage = async (image) => {
    const s3 = new AWS.S3({
      accessKeyId: 'AKIA2EY564MQDYU6ZWV5',
      secretAccessKey: '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',
      region: 'us-east-2',
    });

    const params = {
      Bucket: 'lordsgym-bucket',
      Key: `images/${image.name}`,
      Body: image,
      ACL: 'public-read', // Make sure uploaded image is publically accessible
    };

    return new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.Location);
        }
      });
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().replace(/:/g, '-');
    const fileName = `${formattedDate}-${file.name}`;
    
    setSelectedImage(file);
    formik.setFieldValue("image", new File([file], fileName, { type: file.type }));
  };
  
  
  const openNotification = () => {
    api.success({
      message: 'Successfully added!',
      description: 'Your blog post is successfully created!',
      duration: 0,
    });
  };
  
  return (
    <>
      {contextHolder}
      <form onSubmit={formik.handleSubmit}>
        <MKBox mb={2}>
          <MKInput
            type="text"
            label="Title"
            fullWidth
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </MKBox>
        <MKBox mb={2}>
            <MKInput multiline rows={5}  label="Content"
            fullWidth
            name="content"
            value={formik.values.content}
            onChange={formik.handleChange}
            error={formik.touched.content && Boolean(formik.errors.content)}
            helperText={formik.touched.content && formik.errors.content}/>
        </MKBox>
        <MKBox mb={2}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </MKBox>
        <MKBox mt={4} mb={1}>
          <MKButton type="submit" variant="gradient" color="info" fullWidth>
            Add Blog Post
          </MKButton>
        </MKBox>
      </form>
    </>
  )
}

AddBlogPost.propTypes = {
  blogPostId: PropTypes.number
};

export default AddBlogPost;
