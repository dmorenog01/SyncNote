import { GoIssueReopened } from 'react-icons/go'

const Logo = () => {
    return (
        <h1 className='flex items-center'>
            <GoIssueReopened size={22} className='fill-[#cbd5e1] animate-spin-once'/> <h1 className='text-lg font-semibold text-slate-300 ml-1'>SyncNote</h1>
        </h1> 
    )
}
export default Logo