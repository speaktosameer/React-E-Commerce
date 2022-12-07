import React from 'react'

export const Categories = () => {
    const data =[
        {
            cateImg: './images/category/cat1.png',
            catName: 'Fashion',
        },
        {
            cateImg: './images/category/cat2.png',
            catName: 'Electronics',
        },
        {
            cateImg: './images/category/cat3.png',
            catName: 'Bikes',
        },
        {
            cateImg: './images/category/cat4.png',
            catName: 'Home & Garden',
        },
        {
            cateImg: './images/category/cat5.png',
            catName: 'Gifts',
        },
        {
            cateImg: './images/category/cat6.png',
            catName: 'Music',
        },
        {
            cateImg: './images/category/cat7.png',
            catName: 'Health & Beauty',
        },
        {
            cateImg: './images/category/cat8.png',
            catName: 'Pets',
        },
        {
            cateImg: './images/category/cat9.png',
            catName: 'Baby Toys',
        },
        {
            cateImg: './images/category/cat10.png',
            catName: 'Groceries',
        },
        {
            cateImg: './images/category/cat11.png',
            catName: 'Automotive',
        },
    ]
  return (
    <>
    <div className="category">
        {
            data.map((value,index)=>{
                return(
                    <div className="box f_flex" key={index}>
                        <img src={value.cateImg} alt="" />
                        <span>{value.catName}</span>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}
