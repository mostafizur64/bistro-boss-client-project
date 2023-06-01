import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hoisting_token = import.meta.env.VITE_Image_Upload_token;
console.log(img_hoisting_token);
const AddItem = () => {
    const [axiosSecure] =useAxiosSecure()
    const { register, handleSubmit,reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hoisting_token}`

    const onSubmit = data => {

        const formData = new FormData()
        formData.append('image', data.image[0]);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
                if(imgResponse.success){
                    const imgUrl = imgResponse.data.display_url;
             
                const {name,price,category,recipe} = data;                
                const newItem= {name,price: parseInt(price),category,recipe,image:imgUrl}
                console.log(newItem);
                axiosSecure.post('/menu',newItem)
                .then(data=>{
                    console.log('after posting new menu item',data.data);
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Item added Successfully!`,
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })

                }
            })
    
    };
    return (
        <div className="w-full px-10" >
            <SectionTitle subHeading='Whats New' heading='Add and item'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text-alt">Recipe Name* </span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 80 })}
                        className="input input-bordered w-full " />

                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text-alt">Category *</span>
                        </label>
                        <select defaultValue={'Pick One'}  {...register("category", { required: true })} className="select select-bordered">
                            <option disabled >Pick One</option>
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Dessert</option>
                            <option>Desi</option>
                            <option>Drink</option>
                        </select>

                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text-alt">Price* </span>
                        </label>
                        <input type="text"  {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />

                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text-alt">Recipe Details*</span>
                    </label>
                    <textarea  {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe details"></textarea>
                </div>
                <div className="form-control w-full  my-6">
                    <input  {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full " />

                </div>
                <input className="btn btn-sm " type="submit" value='Add Item' />
            </form>
        </div>
    );
};

export default AddItem;