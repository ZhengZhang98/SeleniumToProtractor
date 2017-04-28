set targetFolder = "node_modules/converter"

if exsit %targetFolder% (
	del %targetFolder% /Q /S /F
)
npm install converter