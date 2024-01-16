export default function userprofile({params}:any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto text-center">
                <h1>Profile</h1>
                <hr />
                <p className="text-4xl">Profile page {params.id}</p>
            </div>
        </div>
    )
}