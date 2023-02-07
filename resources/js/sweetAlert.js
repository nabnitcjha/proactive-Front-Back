export default {
    data() {
        return {};
    },
    methods: {
        deleteAlert(id) {
            // Use sweetalert2
            this.$swal
                .fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    imageUrl: 'https://media3.giphy.com/media/VD4Bt6FyYWcWj0LzDK/giphy.gif?cid=ecf05e474e7l1aq7styn2ewhpwhb551w672171bduai3ppol&rid=giphy.gif&ct=g',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        // this.$root.deleteFile(id);
                        this.$swal.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                        );
                    }
                });
        },
    },
};
