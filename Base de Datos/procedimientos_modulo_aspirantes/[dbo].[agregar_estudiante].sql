USE [Registro2]
GO
/****** Object:  StoredProcedure [dbo].[agregar_estudiante]    Script Date: 27/11/2023 19:54:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[agregar_estudiante]
	@numIdentidad NVARCHAR(13),
	@id_carrera INT -- carrera que aprobo

AS
BEGIN 
	BEGIN TRY
		
		

		declare @id_direccion INT = 5;
		declare @correoPersonal NVARCHAR(100) = (select correo from personas where numero_identidad = @numIdentidad);
		declare @id_centro INT = (select id_centro from aspirantes where id_persona = @numIdentidad);	

		DECLARE @contador INT;
		
		--Verificar que el estudiante no este matriculado
		SELECT @contador = COUNT(id_persona) FROM estudiantes 
		WHERE id_persona = @numIdentidad;

		IF @contador > 0
		BEGIN;
			THROW 51000, 'El estudiante ya esta matriculado.', 1;
		END; 

		--Verificar que la carrera este disponible en el centro regional
		--SELECT @contador = COUNT(*) FROM carreras_CentrosRegionales
		--WHERE id_carrera = @id_carrera and id_centro = @id_centro;

		--IF @contador <= 0
		BEGIN;
			--THROW 51000, 'La carrera no esta disponible en ese centro universitario.', 1;
		--END
		--ELSE
		--BEGIN 
			--Crear el numero de cuenta
			DECLARE @numCuenta NVARCHAR(11);

			DECLARE @anoActual INT = YEAR(GETDATE());

			DECLARE @periodo NVARCHAR(2) = 
			(
				CASE 
					WHEN MONTH(GETDATE()) BETWEEN 5 and 9 THEN '03'
					ELSE '00'
				END
			);
		
			DECLARE @numFinales VARCHAR(4) = FORMAT(NEXT VALUE FOR seq_estudiantes, '0000');
		
			SET @numCuenta = CONCAT(@anoActual, @id_centro, @periodo , @numFinales);

			INSERT INTO estudiantes(num_cuenta,id_persona,id_carrera,id_direccion,id_centro_regional) 
			VALUES (@numCuenta,@numIdentidad,@id_carrera,@id_direccion,@id_centro);

			EXEC dbo.ActualizarCorreoEstudiante @Identidad = @numIdentidad;
			
			-- Eliminar al estudiante de la tabla aspirantes y resultados_examen_admision
			declare  @id_aspirante int = (SELECT id_aspirante FROM aspirantes WHERE id_persona = @numIdentidad);
            DELETE FROM resultados_examen_admision WHERE id_aspirante = @id_aspirante;
            DELETE FROM aspirantes WHERE id_persona = @numIdentidad;
		END

	END TRY
	BEGIN CATCH
		THROW;
		ROLLBACK;
	END CATCH;
END;
