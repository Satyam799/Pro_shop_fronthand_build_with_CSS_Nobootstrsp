import apiSlice from "./apislice";

const Orderslice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetOrder: builder.mutation({
      query: (data) => ({
        url: "/api/orders",
        method: "POST",
        credentials: "include",
        body: data,
      }),
    }),
    Getorderbyid: builder.query({
      query: (id) => ({
        url: `/api/orders/${id}`,
        credentials: "include",
      }),
    }),
    Payorder: builder.mutation({
      query: (id, data) => ({
        url: `/api/orders/${id}/pay`,
        method: "PUT",
        credentials: "include",
        body: data,
      }),
    }),
    OrderDelivered: builder.mutation({
      query: (id) => ({
        url: `/api/orders/${id}/deliver`,
        method: "PUT",
        credentials: "include",
      }),
    }),
    Getusersorder: builder.query({
      query: (id) => ({
        url: `/api/orders/user/${id}`,
      }),
    }),
    GetAllorders:builder.query({
        query:()=>({
            url:'/api/orders'
        })
    })
  }),
});

export const {
  useGetusersorderQuery,
  useOrderDeliveredMutation,
  useGetOrderMutation,
  useGetorderbyidQuery,
  usePayorderMutation,
  useGetAllordersQuery
} = Orderslice;
