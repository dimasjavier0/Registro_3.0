USE [Registro2]
GO
/****** Object:  StoredProcedure [dbo].[ActualizarCorreoEstudiante]    Script Date: 27/11/2023 19:59:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[ActualizarCorreoEstudiante]
    @Identidad NVARCHAR(13)
AS
BEGIN 
    DECLARE @Nombre1 nvarchar(100), @Nombre2 nvarchar(100), @Apellido1 nvarchar(100), @Apellido2 nvarchar(100)
    DECLARE @BaseCorreo nvarchar(100), @Contador int, @CorreoUnico nvarchar(100)
	
    -- Obtener los nombres y apellidos del estudiante
    SELECT @Nombre1 = primer_nombre, @Nombre2 = segundo_nombre, @Apellido1 = primer_apellido, @Apellido2 = segundo_apellido
    FROM personas
    WHERE numero_identidad = @Identidad
	
    -- Crear la base del correo electrónico
    SET @BaseCorreo = LOWER(REPLACE(@Nombre1, ' ', '') + '.' + REPLACE(@Nombre2, ' ', '') + '.' + REPLACE(@Apellido1, ' ', '') + '.' + REPLACE(@Apellido2, ' ', '') + '@ejemplo.com')
    SET @Contador = 1
    SET @CorreoUnico = @BaseCorreo 

    -- Verificar si el correo ya existe y modificarlo si es necesario
    WHILE EXISTS(SELECT 1 FROM estudiantes WHERE correo_institucional = @CorreoUnico)
    BEGIN
		
        SET @CorreoUnico = LEFT(@BaseCorreo, 100 - LEN(CAST(@Contador AS nvarchar))) + CAST(@Contador AS nvarchar) + '@unah.hn'
        SET @Contador = @Contador + 1
    END

    -- Actualizar el correo del estudiante
    UPDATE estudiantes
    SET correo_institucional = @CorreoUnico
    WHERE id_persona = @Identidad
END
