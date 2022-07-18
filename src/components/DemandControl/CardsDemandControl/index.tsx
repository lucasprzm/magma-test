import cardsDetails from "./cardsDetails";

export default function CardsDemandControl() {
  return (
    <>
      {cardsDetails.map((cardDetail, index) => {
        return (
          <div
            key={index}
            className="border border-[#FFFFFF] shadow max-w-sm bg-[#FFFFFF] rounded m-2 py-4 px-6"
          >
            <div className="flex w-full">
              <div
                className={`w-10 h-10 rounded-2xl ${cardDetail.icon[1]} flex items-center justify-center mr-4`}
              >
                <svg
                  className={`${cardDetail.icon[0]} w-4 h-5`}
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.99998 7H7.99998M3.99998 9.66667H7.99998M9.33332 13H2.66665C1.93027 13 1.33331 12.403 1.33331 11.6667V2.33333C1.33331 1.59695 1.93027 1 2.66665 1H6.39051C6.56732 1 6.73689 1.07024 6.86191 1.19526L10.4714 4.80474C10.5964 4.92976 10.6666 5.09933 10.6666 5.27614V11.6667C10.6666 12.403 10.0697 13 9.33332 13Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="w-full">
                <div>
                  <span className="font-poppins text-xs">{cardDetail.title}</span>
                </div>
                <div className="w-full flex justify-between mt-1">
                  <div className="font-inter text-[8px] font-medium flex items-center">
                    <span className="mr-1 border rounded-lg px-2 py-1 border-gray-2">
                      {cardDetail.department}
                    </span>
                    <span className="border rounded-lg px-2 py-1 border-gray-2">
                      {cardDetail.version}
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    {cardDetail.users.map((user, index) => {
                      return (
                        <div key={index} className="w-5 h-5 mr-1 flex items-center">
                          {user.avatar === null ? (
                            <span className="text-purple-1 font-inter text-[10px] p-1 bg-purple-3 rounded-xl">
                              {user.name[0] + user.surname[0]}
                            </span>
                          ) : (
                            <img src={user.avatar} alt={`Avatar do Usuário ${user.name}`} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="font-inter text-[10px] mt-5">
              <span className="font-bold">Situação: </span>
              <span>{cardDetail.status}</span>
            </div>
            <div className="font-inter text-[10px] mt-1 mb-5">
              <span className="font-bold">Etapa: </span>
              <span>{cardDetail.step}</span>
            </div>
            <div className="w-full bg-gray-1 rounded-full h-1">
              <div
                className="bg-purple-1 h-1 rounded-full"
                style={{ width: cardDetail.progress }}
              ></div>
            </div>
            <div className="mt-1 font-poppins text-[8px] flex justify-between">
              <span>Progresso </span>
              <span>{cardDetail.progress}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
