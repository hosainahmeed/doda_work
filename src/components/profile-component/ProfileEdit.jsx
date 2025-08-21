import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
// import toast from "react-hot-toast";
// import { useUpdateProfileDataMutation } from "../../src/Redux/services/profileApis";

const ProfileEdit = ({ image, data }) => {
  console.log(image);
  const [form] = Form.useForm();

  // const [setProfileUpdate, { isLoading: isProfileUpdate }] =
  //   useUpdateProfileDataMutation();

  useEffect(() => {
    form.setFieldsValue({
      name: data?.name,
      email: data?.email,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const onFinish = async (values) => {
    console.log(values);
    // const formData = new FormData();
    // formData.append("name", values?.name);
    // if (image === null) {
    //   formData.delete("profile_image");
    // } else {
    //   formData.append("profile_image", image);
    // }

    try {
      // await setProfileUpdate({ data: formData }).unwrap();
    //   toast.success("Profile updated successfully (dummy)");
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <div>
      <p className="text-black text-3xl text-center">Edit Your Profile</p>
      <Form
        className="text-black"
        requiredMark={false}
        form={form}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="name"
          label={<span className="text-black">Name</span>}
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input
            placeholder="Name"
            size="large"
            className="p-2 w-full outline-none border-none !text-black"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label={<span className="text-black">Email</span>}
        >
          <Input
            disabled
            type="email"
            size="large"
            placeholder="Email"
            className="cursor-not-allowed p-2 w-full outline-none border-none !bg-white text-black"
          />
        </Form.Item>
        <Form.Item
          name="phone"
          label={<span className="text-black">Contact Number</span>}
        >
          <Input
            type="number"
            size="large"
            placeholder="Phone Number"
            className="cursor-not-allowed p-2 w-full outline-none border-none !bg-white text-black"
          />
        </Form.Item>
        <Form.Item
          name="address"
          label={<span className="text-black">Address</span>}
        >
          <Input
            type="text"
            size="large"
            placeholder="Address"
            className="cursor-not-allowed p-2 w-full outline-none border-none !bg-white text-black"
          />
        </Form.Item>
        <Button
          htmlType="submit"
          // disabled={isProfileUpdate}
          style={{
            color: "#fff",
            height: 40,
          }}
          className="!bg-[var(--secondary-color)] !hover:bg-[var(--secondary-color)] !text-black w-full"
        >
          Update Profile
        </Button>
      </Form>
    </div>
  );
};

export default ProfileEdit;
