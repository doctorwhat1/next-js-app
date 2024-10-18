import Image from "next/image";
import Link from 'next/link'
import Sidebar from "@/components/Sidebar";
import Sidebar2 from "@/components/Sidebar2";
import Topbar from "@/components/Topbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/card';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table
} from '@/components/table';
import Dropdown from "@/components/dropdown";


const items = [
  { id: 1, title: 'Team 1', status: 'Active', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', status: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', status: 'Design', type: 'Full-time', location: 'Remote' },
]

const page = () => {
  return (
<div>


<Topbar />


<div className="p-20 m-2">


<Card>
  <CardHeader>
    <CardTitle>Ваши команды</CardTitle>
    <CardDescription>
      Команды, в которых вы состоите.
    </CardDescription>
  </CardHeader>
  <CardContent>

    
  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Название</th>
        <th>Тип</th>
        <th>Ваша роль</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Название</div>
              <div className="text-sm opacity-50">Описание</div>
            </div>
          </div>
        </td>
        <td>
          Категория
          <br />
          <span className="badge badge-ghost badge-sm">Статус</span>
        </td>
        <td>Ваша должность</td>
        <th>
          <button className="btn btn-ghost btn-xs"> <Dropdown /> </button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-SgQIp1padR8ceMd79jpSLZn2DoR4LDv6g&s"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Стажёры Т1</div>
              <div className="text-sm opacity-50">Всё плохо</div>
            </div>
          </div>
        </td>
        <td>
          Учебная группа
          <br />
          <span className="badge badge-ghost badge-sm">Активная</span>
        </td>
        <td>Пользователь</td>
        <th>
          <button className="btn btn-ghost btn-xs">Открыть</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.icons8.com/office30/512/1c.png"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Разрабы 1С</div>
              <div className="text-sm opacity-50">Hardly Working.</div>
            </div>
          </div>
        </td>
        <td>
          Рабочий чат
          <br />
          <span className="badge badge-ghost badge-sm">Активная</span>
        </td>
        <td>Модератор</td>
        <th>
          <button className="btn btn-ghost btn-xs">Открыть</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/it-2.svg"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Стажёры 2015г.</div>
              <div className="text-sm opacity-50">Помогите</div>
            </div>
          </div>
        </td>
        <td>
          Рабочий чат
          <br />
          <span className="badge badge-ghost badge-sm">В архиве</span>
        </td>
        <td>Администратор</td>
        <th>
          <button className="btn btn-ghost btn-xs"> Открыть </button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    <tfoot>

    </tfoot>



  </table>
</div>

  </CardContent>
</Card>




</div>





</div>
  )
}

export default page