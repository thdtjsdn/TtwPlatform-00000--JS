call del /s /q ..\js\__list.json
call del /s /q ..\js\__listDir.json
call del /s /q ..\js\__listPackage.json

call del /s /q ..\js-common\__list.json
call del /s /q ..\js-common\__listDir.json
call del /s /q ..\js-common\__listPackage.json

call del /s /q ..\js--File\__list.json
call del /s /q ..\js--File\__listDir.json
call del /s /q ..\js--File\__listPackage.json

call del /s /q ..\js--GIS\__list.json
call del /s /q ..\js--GIS\__listDir.json
call del /s /q ..\js--GIS\__listPackage.json

call del /s /q ..\js--Mobile\__list.json
call del /s /q ..\js--Mobile\__listDir.json
call del /s /q ..\js--Mobile\__listPackage.json

call del /s /q ..\js--MongoDB\__list.json
call del /s /q ..\js--MongoDB\__listDir.json
call del /s /q ..\js--MongoDB\__listPackage.json

call del /s /q ..\js--Semantic-UI\__list.json
call del /s /q ..\js--Semantic-UI\__listDir.json
call del /s /q ..\js--Semantic-UI\__listPackage.json

call del /s /q ..\js--Source\__list.json
call del /s /q ..\js--Source\__listDir.json
call del /s /q ..\js--Source\__listPackage.json

::

cd ..
del /s /q *.query

for /f "usebackq delims=" %%d in (`"dir /ad/b/s | sort /R"`) do rd "%%d"
:for /f "tokens=*" %%d in ('dir /ad/b/s ^| sort /R') do rd "%%d"

cd bin_win