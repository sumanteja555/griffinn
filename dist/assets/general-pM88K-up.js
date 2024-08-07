const e="data:image/webp;base64,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",t="/assets/petImage-C8JvtN9h.webp",i="/assets/fineDining-tE7gN49_.webp",n="/assets/games-lAIGrkmD.webp",s="/assets/outDoorTheatre-BY8_QTeR.webp",a="/assets/outdoorDiningarea-CaonNe8s.webp",r="/assets/natureSitout-CSE70KQd.webp",o="/assets/snacks-Cg3Kebt1.webp",P=[{title:"car parking",img:e},{title:"pet friendly",img:t},{title:"fine dining",img:i},{title:"game zone",img:n},{title:"theatre",img:s},{title:"dining area",img:a},{title:"nature sitouts",img:r},{title:"snacks",img:o}],g=[{title:"things to bring for trek",items:["Backpack with Rain cover (30L-40L)","Extra Pair of clothes (Dry-fit preferably)","Keep All things in Separate covers.. then put in bag","Mobile Cover","Raincoat/Poncho","Dry packs/covers to Put your wet clothes"]},{title:"trekking gear",items:["Trekking Shoe with Good Grip","Head Torch (Extra Batteries)","Trekking Pole (Optional)","Cap","Lunch Box & Water bottle","Extra Pair Of Socks","Toiletries","Personal medication","2 emergency note with your name ,address, emergency contact number."]}],A=g;export{P as aminities,A as default};